import { ReplacementParser } from "../ReplacementParser.js";
export declare class MyKitchen101 extends ReplacementParser {
    author(): string;
    title(): string;
    yields(): string;
    ingredients(): string | string[];
    instructions(): string | string[];
}
