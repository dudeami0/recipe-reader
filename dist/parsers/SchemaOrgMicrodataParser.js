import { SchemaOrgParser } from "./SchemaOrgParser.js";
export class SchemaOrgMicrodataParser extends SchemaOrgParser {
    constructor(window, host = "undefined") {
        super(window, host);
    }
    extract() {
        const elements = Array.from(this.getWindow().document.querySelectorAll(`[itemtype$="//schema.org/Recipe"]`));
        const results = elements.map((ele) => {
            return this.getProperties(ele.children);
        });
        return results;
    }
    getProperties(elements) {
        let results = {};
        Array.from(elements).forEach((element) => {
            if (element.hasAttribute("itemprop")) {
                let text = element.hasAttribute("content")
                    ? element.getAttribute("content")
                    : element.textContent;
                let name = element.getAttribute("itemprop");
                if (results[name]) {
                    if (!(results[name] instanceof Array)) {
                        results[name] = [results[name]];
                    }
                    results[name].push(text);
                }
                else {
                    results[name] = text;
                }
            }
            if (!element.hasAttribute("itemtype")) {
                results = Object.assign(results, this.getProperties(element.children));
            }
        });
        return results;
    }
}
//# sourceMappingURL=SchemaOrgMicrodataParser.js.map