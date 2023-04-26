import { RecipeSchema } from "./RecipeSchema.js";

export abstract class Parser {
    private window: Window;
    private host: string;

    constructor(window: Window, host: string = "undefined") {
        this.window = window;
        this.host = host;
    }

    getWindow() {
        return this.window;
    }

    getHost() {
        return this.host;
    }

    abstract parse(): RecipeSchema[];
}
