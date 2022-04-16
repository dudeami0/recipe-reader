import { ReplacementParser } from "../ReplacementParser.js";
export declare class MyKitchen101en extends ReplacementParser {
    private _instructions;
    before_parse(): void;
    author(): string;
    title(): string;
    yields(): string;
    ingredients(): string | string[];
    instructions(): string[];
}
