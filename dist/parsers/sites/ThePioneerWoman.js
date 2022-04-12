import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
export class ThePioneerWoman extends ReplacementParser {
    title() {
        const ele = this.querySelector("h3.recipe-title");
        return normalizeElement(ele);
    }
    total_time() {
        const eles = this.querySelectorAll("div.recipe-summary-time dd");
        return eles.map((ele) => normalizeElement(ele)).join(" ");
    }
    ingredients() {
        const eles = this.querySelectorAll("ul.list-ingredients li");
        return normalizeNodeList(eles);
    }
    instructions() {
        const ele = this.querySelector("div.panel-body:last-child");
        return normalizeElement(ele);
    }
}
//# sourceMappingURL=ThePioneerWoman.js.map