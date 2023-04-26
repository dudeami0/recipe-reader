import { ReplacementParser } from "../ReplacementParser.js";
export declare class MonsieurCuisine extends ReplacementParser {
    author(): string;
    title(): string;
    total_time(): string;
    yields(): string;
    image(): string;
    ingredients(): string[];
    instructions(): string[];
    ratings(): string;
}
