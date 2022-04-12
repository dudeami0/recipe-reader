import { ReplacementParser } from "../ReplacementParser.js";
export declare class AfghanKitchenRecipes extends ReplacementParser {
    author(): string;
    total_time(): string;
    yields(): string;
    ingredients(): string | string[];
    instructions(): string[];
}
