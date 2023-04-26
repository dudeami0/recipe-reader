import { Parser } from "./Parser.js";
import { RecipeSchema } from "./RecipeSchema.js";
import { normalizeString } from "./ReplacementParser.js";

/**
 * Searches the given HTML data for a schema.org Recipe definition, and returns
 * a RecipeSchema if one is found.
 */
export abstract class SchemaOrgParser extends Parser {
    private rawData?: any;

    constructor(window: Window, host: string) {
        super(window, host);
    }

    /**
     * Calls on the extending class to extract the data.
     */
    abstract extract(): any;

    /**
     * Extracts the information and normalizes it if found.
     * @returns
     */
    parse() {
        this.rawData = this.extract();
        return [...this.rawData.map(this.normalize.bind(this))];
    }

    private mappings: { [key: string]: string } = {
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

    private normalizeKeyNames(root: { [key: string]: any }) {
        let results: { [key: string]: any } = {};
        for (let key in root) {
            const object = root[key];
            const lckey = this.mappings[key.toLowerCase()] || key;
            if (object instanceof Array) {
                results[lckey] = object.map((o) => this.normalizeSingleKey(o));
            } else {
                results[lckey] = this.normalizeSingleKey(object);
            }
        }
        return results;
    }

    private normalizeSingleKey(object: any) {
        if (object instanceof Object) {
            return this.normalizeKeyNames(object);
        } else {
            return object;
        }
    }

    normalize(data: any) {
        return <RecipeSchema>this.normalizeKeyNames({
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

    private normalizeArray(data: any) {
        return data instanceof Array ? data : Boolean(data) ? [data] : [];
    }

    private normalizeString(...data: any[]) {
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

    private normalizeImage(data: any): string {
        if (data) {
            if (data["@type"] === "ImageObject") {
                return this.normalizeUrl(data.contentUrl);
            } else {
                return this.normalizeUrl(data);
            }
        }
        return "";
    }

    private normalizeUrl(data: any) {
        if (data) {
            if (data instanceof String) {
                return <string>data;
            } else if (data["@type"] === "URL") {
                return <string>data.contentUrl;
            }
        }
        return "";
    }
}
