import { SchemaOrgJsonLdParser } from "./parsers/SchemaOrgJsonLdParser.js";
import { SchemaOrgMicrodataParser } from "./parsers/SchemaOrgMicrodataParser.js";
import { SchemaOrgRDFaParser } from "./parsers/SchemaOrgRDFaParser.js";
import { parsers } from "./parsers/sites/index.js";
/**
 * Given a DOM Window object, will attempt to read the
 */
export class RecipeReader {
    /**
     * Initialize a RecipeReader.
     * @param window The DOM window to find a recipe in
     * @param host Used to populate RecipeSchema host field
     */
    constructor(window, host = "undefined") {
        this.parsers = [];
        this.window = window;
        this.host = host || window.location.href;
        this.parsers = [
            new SchemaOrgJsonLdParser(window, host),
            new SchemaOrgRDFaParser(window, host),
            new SchemaOrgMicrodataParser(window, host)
        ];
        this.recipes = this.parsers.map((p) => p.parse()).flat();
        if (this.recipes.length == 0) {
            this.recipes.push({});
        }
        this.replace();
    }
    replace() {
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
//# sourceMappingURL=RecipeReader.js.map