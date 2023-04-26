import { ReplacementParser } from "../ReplacementParser.js";
export declare class LAtelierDeRoxane extends ReplacementParser {
    private blocs;
    before_parse(): void;
    image(): string;
    title(): string;
    description(): string;
    total_time(): string;
    prep_time(): string;
    cook_time(): string;
    yields(): string;
    ingredients(): string[];
    instructions(): string[];
}
