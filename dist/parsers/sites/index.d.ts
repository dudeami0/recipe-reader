import { RecipeSchema } from "../RecipeSchema.js";
import { ReplacementParser } from "../ReplacementParser.js";
interface Constructor {
    (host: string): ReplacementParser;
}
export declare const parsers: {
    [key: string]: Constructor | undefined;
};
export default function replace(window: Window, orig: RecipeSchema): RecipeSchema;
export {};
