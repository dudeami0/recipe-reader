import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
export class SouthernLiving extends ReplacementParser {
    instructions() {
        const eles = this.querySelectorAll("ul.instructions-section li.instructions-section-item div.paragraph");
        return normalizeNodeList(eles);
    }
    description() {
        const ele = this.querySelector("div[class^='recipe-summary'], div[class*=' recipe-summary']");
        return normalizeElement(ele);
    }
}
//# sourceMappingURL=SouthernLiving.js.map