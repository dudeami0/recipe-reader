import { ReplacementParser } from "../ReplacementParser.js";
export declare class Delish extends ReplacementParser {
    author(): string;
    title(): string;
    total_time(): string;
    yields(): string;
    image(): string;
    ingredients(): string[];
    instructions(): string[];
}
