import { Parser } from "./Parser.js";
/**
 * Searches the given HTML data for a schema.org Recipe definition, and returns
 * a RecipeSchema if one is found.
 */
export class SchemaOrgParser extends Parser {
    constructor(window, host) {
        super(window, host);
    }
    /**
     * Extracts the information and normalizes it if found.
     * @returns
     */
    parse() {
        return [...this.extract().map(this.normalize.bind(this))];
    }
    normalize(data) {
        return {
            host: this.getHost(),
            author: this.normalizeString(data.author),
            title: this.normalizeString(data.name),
            category: this.normalizeString(data.recipeCategory),
            total_time: this.normalizeString(data.totalTime),
            yields: this.normalizeString(data.recipeYield),
            image: this.normalizeImage(data.image),
            ingredients: this.normalizeArray(data.recipeIngredient).map(this.normalizeString),
            instructions: this.normalizeArray(data.recipeInstructions),
            rating: this.normalizeString(data.ratingValue)
        };
    }
    normalizeArray(data) {
        return data instanceof Array ? data : Boolean(data) ? [data] : [];
    }
    normalizeString(data) {
        return data ? String(data) : "";
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