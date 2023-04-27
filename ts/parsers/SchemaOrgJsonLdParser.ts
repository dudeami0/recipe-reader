import { SchemaOrgParser } from "./SchemaOrgParser.js";

export class SchemaOrgJsonLdParser extends SchemaOrgParser {
    constructor(window: Window, host: string = "undefined") {
        super(window, host);
    }

    getLDJSON(): any[] {
        return Array.from(
            this.getWindow().document.querySelectorAll(
                `script[type="application/ld+json"]`
            )
        ).map((ele) => ele.innerHTML);
    }

    extract() {
        const schemas = this.getLDJSON()
            .flatMap((text) => {
                try {
                    let schemas;
                    try {
                        schemas = JSON.parse(text);
                    } catch (e) {}
                    if (!schemas) {
                        schemas = JSON.parse(this.fixJson(text));
                    }
                    if (!(schemas instanceof Array)) {
                        schemas = [schemas];
                    }
                    return schemas;
                } catch (e) {
                    // Malformed JSON
                    return false;
                }
            })
            .filter((str) => Boolean(str))
            .filter(
                (schema: any) =>
                    schema["@context"].indexOf("//schema.org") !== -1
            )
            .flatMap((schema) => {
                if (schema["@graph"] instanceof Array) {
                    return schema["@graph"];
                } else {
                    return [schema];
                }
            })
            .filter((r) => Boolean(r));

        const recipes = schemas.filter((schema) =>
            schema["@type"] instanceof Array
                ? schema["@type"].indexOf("Recipe") !== -1
                : schema["@type"] === "Recipe"
        );

        const ids: { [name: string]: any } = {};
        schemas.forEach((schema) => {
            if (schema["@id"]) {
                ids[schema["@id"]] = schema;
            }
        });

        const results = recipes
            .filter((recipe) => Boolean(recipe))
            .map((recipe) => {
                const id = recipe && recipe.author && ids[recipe.author["@id"]];
                if (id) {
                    recipe.author = id.name;
                }
                return recipe;
            });
        return results;
    }

    /**
     * Attempts to remove new lines in strings (common occurance?), and extra
     * colons in LD+JSON
     */
    private fixJson(str: string) {
        let index = 0;
        let inString = false;
        let objDepth = 0;
        let results = "";
        do {
            const char = str[index];
            if (inString && char == "\n") {
                results += "\\n";
                continue;
            } else if (char == "}") {
                if (objDepth == 0) {
                    continue;
                }
                objDepth--;
            } else if (char == `"` && str[index - 1] !== "\\") {
                inString = !inString;
            } else if (char == "{") {
                objDepth++;
            }
            results += char;
        } while (++index < str.length);
        return results;
    }
}
