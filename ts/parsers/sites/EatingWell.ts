import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement } from "../utils.js";

export class EatingWell extends ReplacementParser {
    total_time() {
        return this.findAttribute("total") || super.total_time();
    }

    yields() {
        return this.findAttribute("servings") || super.yields();
    }

    private findAttribute(attr: string) {
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
