import { ReplacementParser } from "../ReplacementParser.js";
export declare class JustBento extends ReplacementParser {
    private _ingredients;
    private _instructions;
    before_parse(): void;
    title(): string;
    total_time(): string;
    ingredients(): string[];
    instructions(): string[];
}
