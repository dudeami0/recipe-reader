import { normalizeElement, ReplacementParser } from "../ReplacementParser.js";
export class EatingWell extends ReplacementParser {
    total_time() {
        return this.findAttribute("total") || super.total_time();
    }
    yields() {
        return this.findAttribute("servings") || super.yields();
    }
    findAttribute(attr) {
        const eles = this.querySelectorAll("div.recipe-meta-item");
        for (const ele of eles) {
            const children = ele.querySelectorAll("span");
            const name = normalizeElement(children[0]).toLowerCase();
            if (name === attr) {
                return normalizeElement(children[1]);
            }
        }
    }
}
//# sourceMappingURL=EatingWell.js.map