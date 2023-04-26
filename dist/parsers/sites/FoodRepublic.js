import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
export class FoodRepublic extends ReplacementParser {
    author() {
        const ele = this.querySelector(".byline");
        return normalizeElement(ele);
    }
    title() {
        const ele = this.querySelector("h3.recipe-title");
        return normalizeElement(ele);
    }
    prep_time() {
        const ele = this.querySelector("li.prep-time");
        return normalizeElement(ele);
    }
    cook_time() {
        const ele = this.querySelector("li.cook-time");
        return normalizeElement(ele);
    }
    total_time() {
        return this.calc_total_time();
    }
    instructions() {
        const eles = this.querySelectorAll("div.directions li");
        return normalizeNodeList(eles);
    }
}
//# sourceMappingURL=FoodRepublic.js.map