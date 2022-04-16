import { ReplacementParser } from "../ReplacementParser.js";
export declare class WikiCookbook extends ReplacementParser {
    private _ingredients;
    private _instructions;
    before_parse(): void;
    title(): string;
    total_time(): string;
    yields(): string;
    image(): string;
    ingredients(): string[];
    instructions(): string[];
}
