import { ReplacementParser } from "../ReplacementParser.js";
export declare class FarmhouseDelivery extends ReplacementParser {
    title(): string;
    ingredients(): string | string[];
    instructions(): string | string[];
}
