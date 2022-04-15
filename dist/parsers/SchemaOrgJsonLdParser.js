import { SchemaOrgParser } from "./SchemaOrgParser.js";
export class SchemaOrgJsonLdParser extends SchemaOrgParser {
    constructor(window, host = "undefined") {
        super(window, host);
    }
    extract() {
        const scripts = Array.from(this.getWindow().document.querySelectorAll(`script[type="application/ld+json"]`));
        return scripts
            .map((script) => {
            try {
                let schemas;
                try {
                    schemas = JSON.parse(script.innerHTML);
                }
                catch (e) { }
                if (!schemas) {
                    schemas = JSON.parse(this.fixJson(script.innerHTML));
                }
                if (!(schemas instanceof Array)) {
                    schemas = [schemas];
                }
                return schemas.filter((schema) => schema["@context"].indexOf("//schema.org") !== -1 &&
                    schema["@type"] === "Recipe");
            }
            catch (e) {
                // Malformed JSON
                return false;
            }
        })
            .filter((r) => Boolean(r))
            .flat(1);
    }
    /**
     * Attempts to remove new lines in strings (common occurance?), and extra
     * colons in LD+JSON
     */
    fixJson(str) {
        let index = 0;
        let inString = false;
        let objDepth = 0;
        let results = "";
        do {
            const char = str[index];
            if (inString && char == "\n") {
                results += "\\n";
                continue;
            }
            else if (char == "}") {
                if (objDepth == 0) {
                    continue;
                }
                objDepth--;
            }
            else if (char == `"` && str[index - 1] !== "\\") {
                inString = !inString;
            }
            else if (char == "{") {
                objDepth++;
            }
            results += char;
        } while (++index < str.length);
        return results;
    }
}
//# sourceMappingURL=SchemaOrgJsonLdParser.js.map