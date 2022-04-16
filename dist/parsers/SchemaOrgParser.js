import { Parser } from "./Parser.js";
import { normalizeString } from "./ReplacementParser.js";
/**
 * Searches the given HTML data for a schema.org Recipe definition, and returns
 * a RecipeSchema if one is found.
 */
export class SchemaOrgParser extends Parser {
    constructor(window, host) {
        super(window, host);
        this.mappings = {
            author: "author",
            name: "name",
            recipecategory: "recipeCategory",
            totaltime: "totalTime",
            recipeyield: "recipeYield",
            yield: "yield",
            image: "image",
            recipeingredient: "recipeIngredient",
            recipeingredients: "recipeIngredients",
            ingredient: "ingredient",
            ingredients: "ingredients",
            recipeinstruction: "recipeInstruction",
            recipeinstructions: "recipeInstructions",
            instruction: "instruction",
            instructions: "instructions",
            ratingvalue: "ratingValue",
            "@type": "@type",
            text: "text"
        };
    }
    /**
     * Extracts the information and normalizes it if found.
     * @returns
     */
    parse() {
        this.rawData = this.extract();
        return [...this.rawData.map(this.normalize.bind(this))];
    }
    normalizeKeyNames(root) {
        let results = {};
        for (let key in root) {
            const object = root[key];
            const lckey = this.mappings[key.toLowerCase()] || key;
            if (object instanceof Array) {
                results[lckey] = object.map((o) => this.normalizeSingleKey(o));
            }
            else {
                results[lckey] = this.normalizeSingleKey(object);
            }
        }
        return results;
    }
    normalizeSingleKey(object) {
        if (object instanceof Object) {
            return this.normalizeKeyNames(object);
        }
        else {
            return object;
        }
    }
    normalize(data) {
        return this.normalizeKeyNames({
            _raw: data,
            host: this.getHost(),
            author: this.normalizeArray(data.author)
                .map(this.normalizeString.bind(this))
                .join(", "),
            title: this.normalizeString(data.name),
            category: this.normalizeString(data.recipeCategory),
            total_time: this.normalizeString(data.totalTime),
            yields: this.normalizeString(data.recipeYield, data.yield),
            image: this.normalizeImage(data.image),
            ingredients: this.normalizeArray([
                ...this.normalizeArray(data.recipeIngredient),
                ...this.normalizeArray(data.recipeIngredients),
                ...this.normalizeArray(data.ingredients),
                ...this.normalizeArray(data.ingredient)
            ]).map(this.normalizeString.bind(this)),
            instructions: [
                ...this.normalizeArray(data.recipeInstructions),
                ...this.normalizeArray(data.recipeInstruction),
                ...this.normalizeArray(data.instructions),
                ...this.normalizeArray(data.instruction)
            ].map(this.normalizeString.bind(this)),
            rating: this.normalizeString(data.ratingValue)
        });
    }
    normalizeArray(data) {
        return data instanceof Array ? data : Boolean(data) ? [data] : [];
    }
    normalizeString(...data) {
        for (const entry of data) {
            if (entry) {
                const obj = this.normalizeKeyNames(entry);
                if (obj["@type"]) {
                    // Guessing a text node below for now TODO
                    switch (obj["@type"]) {
                        case "Organization":
                        case "Person":
                            return normalizeString(obj.name);
                        default:
                            return normalizeString(obj.text);
                    }
                }
                return normalizeString(entry);
            }
        }
        return "";
    }
    normalizeImage(data) {
        if (data) {
            if (data["@type"] === "ImageObject") {
                return this.normalizeUrl(data.contentUrl);
            }
            else {
                return this.normalizeUrl(data);
            }
        }
        return "";
    }
    normalizeUrl(data) {
        if (data) {
            if (data instanceof String) {
                return data;
            }
            else if (data["@type"] === "URL") {
                return data.contentUrl;
            }
        }
        return "";
    }
}
//# sourceMappingURL=SchemaOrgParser.js.map