import { ReplacementParser } from "../ReplacementParser.js";
export declare class FredriksFikaAllas extends ReplacementParser {
    private _ingredients;
    private _instructions;
    before_parse(): void;
    author(): string;
    title(): string;
    category(): string;
    ingredients(): string[];
    instructions(): string[];
}
