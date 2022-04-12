import { ReplacementParser } from "../ReplacementParser.js";
export declare class BBCFood extends ReplacementParser {
    title(): string;
    prep_time(): string;
    cook_time(): string;
    total_time(): string;
    yields(): string;
    author(): string;
    image(): string;
    ingredients(): string[];
    instructions(): string[];
}
