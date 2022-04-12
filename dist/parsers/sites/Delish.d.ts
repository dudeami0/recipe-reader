import { ReplacementParser } from "../ReplacementParser.js";
export declare class Delish extends ReplacementParser {
    title(): string;
    total_time(): string;
    yields(): string;
    image(): string;
    ingredients(): string[];
    instructions(): string[];
}
