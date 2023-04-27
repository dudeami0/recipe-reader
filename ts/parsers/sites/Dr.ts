import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement } from "../utils.js";

export class Dr extends ReplacementParser {
    language() {
        const ele = this.querySelector(`meta[name="language"]`);
        return normalizeElement(ele, "content");
    }
}
