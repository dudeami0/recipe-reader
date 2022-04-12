import { SchemaOrgParser } from "./SchemaOrgParser.js";
export declare class SchemaOrgRDFaParser extends SchemaOrgParser {
    constructor(window: Window, host?: string);
    extract(): any[];
    private getProperties;
}
