import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
export class ThePioneerWoman extends ReplacementParser {
    author() {
        const ele = this.querySelector(".byline-name");
        return normalizeElement(ele);
    }
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }
    total_time() {
        const eles = this.querySelectorAll("div.recipe-summary-time dd");
        return eles.map((ele) => normalizeElement(ele)).join(" ");
    }
    ingredients() {
        const eles = this.querySelectorAll(".ingredient-item");
        return normalizeNodeList(eles);
    }
    instructions() {
        const eles = this.querySelectorAll(".direction-lists li");
        return normalizeNodeList(eles);
    }
}
//# sourceMappingURL=ThePioneerWoman.js.map