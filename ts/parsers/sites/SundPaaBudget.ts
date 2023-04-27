import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement } from "../utils.js";

export class SundPaaBudget extends ReplacementParser {
    description() {
        const ele = this.querySelector(`meta[property="og:description"]`);
        return normalizeElement(ele, "content");
    }
}
