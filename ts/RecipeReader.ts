import { Parser } from "./parsers/Parser.js";
import { RecipeSchema } from "./parsers/RecipeSchema.js";
import { SchemaOrgJsonLdParser } from "./parsers/SchemaOrgJsonLdParser.js";
import { SchemaOrgMicrodataParser } from "./parsers/SchemaOrgMicrodataParser.js";
import { SchemaOrgRDFaParser } from "./parsers/SchemaOrgRDFaParser.js";
import { parsers } from "./parsers/sites/index.js";

export function getReader() {
    return new RecipeReader(window, window.location.href);
}

/**
 * Given a DOM Window object, will attempt to read the
 */
export class RecipeReader {
    private window: Window;
    private host: string;
    private parsers: Parser[] = [];
    private recipes: RecipeSchema[];

    /**
     * Initialize a RecipeReader.
     * @param window The DOM window to find a recipe in
     * @param host Used to populate RecipeSchema host field
     */
    constructor(window: Window, host: string = "undefined") {
        this.window = window;
        this.host = host || window.location.href;

        if (this.host.indexOf("www.") === 0) {
            this.host = this.host.substring(4);
        }
        this.parsers = [
            new SchemaOrgJsonLdParser(window, host),
            new SchemaOrgRDFaParser(window, host),
            new SchemaOrgMicrodataParser(window, host),
        ];
        this.recipes = this.parsers.map((p) => p.parse()).flat();
        if (this.recipes.length == 0) {
            this.recipes.push(<RecipeSchema>{});
        }
        this.replace();
    }

    private replace() {
        if (this.host) {
            const replacer = parsers[this.host];
            if (replacer) {
                const r = replacer(this.host);
                this.recipes = this.recipes.map((recipe) => {
                    r.parse(this.window, recipe);
                    return r.get();
                });
            }
        }
    }

    get() {
        return this.recipes;
    }
}
