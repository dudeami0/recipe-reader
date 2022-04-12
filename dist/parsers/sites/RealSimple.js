import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
export class RealSimple extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }
    total_time() {
        const ele = this.querySelector("div.recipe-meta-item:nth-child(2)");
        return normalizeElement(ele);
    }
    yields() {
        const ele = this.querySelector("div.recipe-meta-item:nth-child(3) div.recipe-meta-item-body");
        return normalizeElement(ele);
    }
    ingredients() {
        const eles = this.querySelectorAll("div.ingredients li");
        return normalizeNodeList(eles);
    }
    instructions() {
        const eles = this.querySelectorAll("div.step p");
        return normalizeNodeList(eles);
    }
}
//# sourceMappingURL=RealSimple.js.map