import { SchemaOrgParser } from "./SchemaOrgParser.js";
export declare class SchemaOrgMicrodataParser extends SchemaOrgParser {
    constructor(window: Window, host?: string);
    extract(): any[];
    private getProperties;
}
