import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
export class Delish extends ReplacementParser {
    author() {
        const ele = this.querySelector(".byline-name");
        return normalizeElement(ele);
    }
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }
    total_time() {
        const ele = this.querySelector("span.total-time-amount");
        return normalizeElement(ele);
    }
    yields() {
        const ele = this.querySelector("span.yields-amount");
        return normalizeElement(ele);
    }
    image() {
        const ele = this.querySelector("div.content-lede-image-wrap.aspect-ratio-1x1 img");
        return normalizeElement(ele, "src");
    }
    ingredients() {
        const eles = this.querySelectorAll("div.ingredient-item");
        return normalizeNodeList(eles);
    }
    instructions() {
        const eles = this.querySelectorAll("div.direction-lists");
        return normalizeNodeList(eles);
    }
}
//# sourceMappingURL=Delish.js.map