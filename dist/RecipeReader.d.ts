/**
 * Given a DOM Window object, will attempt to read the
 */
export declare class RecipeReader {
    private window;
    private host;
    private parsers;
    /**
     * Initialize a RecipeReader.
     * @param window The DOM window to find a recipe in
     * @param host Used to populate RecipeSchema host field
     */
    constructor(window: Window, host?: string);
    find(): void;
}
