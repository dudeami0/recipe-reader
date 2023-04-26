import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
export class MyKitchen101en extends ReplacementParser {
    constructor() {
        super(...arguments);
        this._instructions = [];
    }
    before_parse() {
        const ele = this.querySelector(".entry-content");
        if (ele && ele.children) {
            const children = Array.from(ele.children) || [];
            let stage = 0;
            for (const child of children) {
                if (!child.textContent) {
                    continue;
                }
                if (stage > 0 && child.matches("p")) {
                    this._instructions.push(child.textContent || "");
                }
                if (child.textContent.indexOf("Directions:") !== -1) {
                    stage++;
                }
            }
        }
    }
    author() {
        const ele = this.querySelector(`a[rel="author"]`);
        return normalizeElement(ele);
    }
    title() {
        const ele = this.querySelector("h1.entry-title");
        return normalizeElement(ele);
    }
    yields() {
        const ele = this.querySelector("p", "Yields: ");
        return normalizeElement(ele);
    }
    ingredients() {
        const ele = this.querySelector("p", "Ingredients:");
        if (ele && ele.nextElementSibling) {
            const eles = Array.from(ele.nextElementSibling.querySelectorAll("li"));
            return normalizeNodeList(eles);
        }
        return super.ingredients();
    }
    instructions() {
        return this._instructions;
    }
}
//# sourceMappingURL=MyKitchen101en.js.map