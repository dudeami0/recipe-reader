import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
export class HundredAndOneCookbooks extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }
    total_time() {
        const eles = this.querySelectorAll("div.wprm-recipe-time");
        return normalizeElement(eles ? eles[eles.length - 1] : null);
    }
    yields() {
        const ele = this.querySelector("div.wprm-recipe-time");
        return normalizeElement(ele);
    }
    ingredients() {
        const eles = this.querySelectorAll("li.wprm-recipe-ingredient");
        return normalizeNodeList(eles);
    }
    instructions() {
        const eles = this.querySelectorAll("li.wprm-recipe-instruction");
        return normalizeNodeList(eles);
    }
}
//# sourceMappingURL=HundredAndOneCookbooks.js.map