import { ReplacementParser } from "../ReplacementParser.js";
export declare class WordpressRecipe extends ReplacementParser {
    author(): string;
    title(): string;
    total_time(): string;
    image(): string;
    yields(): string;
    ingredients(): string[];
    instructions(): string[];
    ratings(): string;
}
