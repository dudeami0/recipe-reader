import { normalizeElement, ReplacementParser } from "../ReplacementParser.js";

export class MarthaStewart extends ReplacementParser {
    total_time() {
        const ele = this.querySelector(
            "div.two-subcol-content-wrapper div.recipe-meta-item-body"
        );
        return normalizeElement(ele);
    }
    yields() {
        const ele = this.querySelector(
            "div.two-subcol-content-wrapper:nth-child(2) div.recipe-meta-item-body"
        );
        return normalizeElement(ele);
    }
}
