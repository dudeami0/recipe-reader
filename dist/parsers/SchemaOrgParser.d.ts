import { Parser } from "./Parser.js";
import { RecipeSchema } from "./RecipeSchema.js";
/**
 * Searches the given HTML data for a schema.org Recipe definition, and returns
 * a RecipeSchema if one is found.
 */
export declare abstract class SchemaOrgParser extends Parser {
    private rawData?;
    constructor(window: Window, host: string);
    /**
     * Calls on the extending class to extract the data.
     */
    abstract extract(): any;
    /**
     * Extracts the information and normalizes it if found.
     * @returns
     */
    parse(): any[];
    private mappings;
    private normalizeKeyNames;
    private normalizeSingleKey;
    normalize(data: any): RecipeSchema;
    private normalizeArray;
    private normalizeString;
    private normalizeImage;
    private normalizeUrl;
}
