import { ReplacementParser } from "../ReplacementParser.js";
export declare class SimplyRecipes extends ReplacementParser {
    title(): string;
    total_time(): string;
    yields(): string;
    ingredients(): string[];
    instructions(): string[];
}
