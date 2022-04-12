import { normalizeElement, ReplacementParser } from "../ReplacementParser.js";

export class Dr extends ReplacementParser {
    language() {
        const ele = this.querySelector(`meta[name="language"]`);
        return normalizeElement(ele, "content");
    }
}
