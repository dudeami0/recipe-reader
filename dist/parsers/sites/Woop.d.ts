import { ReplacementParser } from "../ReplacementParser.js";
export declare class Woop extends ReplacementParser {
    title(): string;
    ingredients(): string[];
    yields(): string;
    total_time(): string;
    instructions(): string[];
    nutrients(): string[];
}
