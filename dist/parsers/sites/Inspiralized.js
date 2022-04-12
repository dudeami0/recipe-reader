import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
export class Inspiralized extends ReplacementParser {
    title() {
        const ele = this.querySelector("h2");
        return normalizeElement(ele);
    }
    ingredients() {
        const eles = this.querySelectorAll("li.ingredient");
        return normalizeNodeList(eles);
    }
    instructions() {
        const eles = this.querySelectorAll("li.instruction");
        return normalizeNodeList(eles);
    }
}
//# sourceMappingURL=Inspiralized.js.map