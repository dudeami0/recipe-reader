import { ReplacementParser } from "../ReplacementParser.js";
export declare class TastyRecipes extends ReplacementParser {
    title(): string;
    prep_time(): string;
    cook_time(): string;
    total_time(): string;
    yields(): string;
    ingredients(): string[];
    instructions(): string[];
    ratings(): string;
}
