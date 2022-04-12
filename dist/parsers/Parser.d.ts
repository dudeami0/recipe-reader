import { RecipeSchema } from "./RecipeSchema.js";
export declare abstract class Parser {
    private window;
    private host;
    constructor(window: Window, host?: string);
    getWindow(): Window;
    getHost(): string;
    abstract parse(): RecipeSchema[];
}
