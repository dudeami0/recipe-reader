import { ReplacementParser } from "../ReplacementParser.js";
export declare class Panelinha extends ReplacementParser {
    title(): string;
    total_time(): string;
    ingredients(): string | string[];
    instructions(): string | string[];
    yields(): string;
}
