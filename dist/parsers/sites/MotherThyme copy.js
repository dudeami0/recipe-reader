import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
export class MotherThyme extends ReplacementParser {
    title() {
        const ele = this.querySelector("h2.wprm-recipe-name");
        return normalizeElement(ele);
    }
    total_time() {
        const ele = this.querySelector("span.wprm-recipe-total_time");
        return normalizeElement(ele);
    }
    yields() {
        const ele = this.querySelector("span.wprm-recipe-servings");
        return normalizeElement(ele);
    }
    ingredients() {
        const eles = this.querySelectorAll("div.wprm-recipe-ingredient");
        return normalizeNodeList(eles);
    }
    instructions() {
        const eles = this.querySelectorAll("div.wprm-recipe-instruction-text");
        return normalizeNodeList(eles);
    }
    ratings() {
        const ele = this.querySelector("span.wprm-recipe-rating-average");
        return normalizeElement(ele);
    }
}
//# sourceMappingURL=MotherThyme%20copy.js.map