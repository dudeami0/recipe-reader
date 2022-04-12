import { Parser } from "./Parser.js";
import { RecipeSchema } from "./RecipeSchema.js";

/**
 * Searches the given HTML data for a schema.org Recipe definition, and returns
 * a RecipeSchema if one is found.
 */
export abstract class SchemaOrgParser extends Parser {
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
        return [...this.extract().map(this.normalize.bind(this))];
    }

    normalize(data: any) {
        return <RecipeSchema>{
            host: this.getHost(),
            author: this.normalizeString(data.author),
            title: this.normalizeString(data.name),
            category: this.normalizeString(data.recipeCategory),
            total_time: this.normalizeString(data.totalTime),
            yields: this.normalizeString([
                ...(data.recipeYield || []),
                ...(data.yield || [])
            ]),
            image: this.normalizeImage(data.image),
            ingredients: this.normalizeArray([
                ...(data.recipeIngredient || []),
                ...(data.recipeIngredients || []),
                ...(data.ingredients || []),
                ...(data.ingredient || [])
            ]).map(this.normalizeString),
            instructions: this.normalizeArray([
                ...(data.recipeInstructions || []),
                ...(data.recipeInstruction || []),
                ...(data.instructions || []),
                ...(data.instruction || [])
            ]),
            rating: this.normalizeString(data.ratingValue)
        };
    }

    private normalizeArray(data: any) {
        return data instanceof Array ? data : Boolean(data) ? [data] : [];
    }

    private normalizeString(data: any) {
        return data ? String(data) : "";
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
