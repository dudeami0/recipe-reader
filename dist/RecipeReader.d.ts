import { RecipeSchema } from "./parsers/RecipeSchema.js";
/**
 * Given a DOM Window object, will attempt to read the
 */
export declare class RecipeReader {
    private window;
    private host;
    private parsers;
    private recipes;
    /**
     * Initialize a RecipeReader.
     * @param window The DOM window to find a recipe in
     * @param host Used to populate RecipeSchema host field
     */
    constructor(window: Window, host?: string);
    private replace;
    get(): RecipeSchema[];
}
