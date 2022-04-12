import { SchemaOrgParser } from "./SchemaOrgParser.js";

export class SchemaOrgJsonLdParser extends SchemaOrgParser {
    constructor(window: Window, host: string = "undefined") {
        super(window, host);
    }

    extract() {
        const scripts = Array.from(
            this.getWindow().document.querySelectorAll(
                `script[type="application/ld+json"]`
            )
        );
        return scripts
            .map((script) => {
                let schemas = JSON.parse(script.innerHTML);
                if (!(schemas instanceof Array)) {
                    schemas = [schemas];
                }
                return schemas.filter(
                    (schema: any) =>
                        schema["@context"].indexOf("//schema.org") !== -1 &&
                        schema["@type"] === "Recipe"
                );
            })
            .filter((r) => Boolean(r))
            .flat(1);
    }
}
