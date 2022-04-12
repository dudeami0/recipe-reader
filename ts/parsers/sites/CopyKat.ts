import { normalizeElement, ReplacementParser } from "../ReplacementParser.js";

export class CopyKat extends ReplacementParser {
    description() {
        const ele = this.querySelector(`span[style="display: block;"]`);
        return normalizeElement(ele);
    }
}
