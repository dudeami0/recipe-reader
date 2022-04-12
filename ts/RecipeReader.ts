import { Parser } from "./parsers/Parser.js";
import { SchemaOrgJsonLdParser } from "./parsers/SchemaOrgJsonLdParser.js";

/**
 * Given a DOM Window object, will attempt to read the
 */
export class RecipeReader {
    private window: Window;
    private host: string;
    private parsers: Parser[] = [];

    /**
     * Initialize a RecipeReader.
     * @param window The DOM window to find a recipe in
     * @param host Used to populate RecipeSchema host field
     */
    constructor(window: Window, host: string = "undefined") {
        this.window = window;
        this.host = host;
        this.parsers = [new SchemaOrgJsonLdParser(window, host)];
    }

    find() {
        for (let p in this.parsers) {
            let results = this.parsers[p].parse();
        }
    }
}
