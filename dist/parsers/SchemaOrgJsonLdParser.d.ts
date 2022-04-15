import { SchemaOrgParser } from "./SchemaOrgParser.js";
export declare class SchemaOrgJsonLdParser extends SchemaOrgParser {
    constructor(window: Window, host?: string);
    extract(): any[];
    /**
     * Attempts to remove new lines in strings (common occurance?), and extra
     * colons in LD+JSON
     */
    private fixJson;
}
