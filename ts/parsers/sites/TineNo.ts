import { normalizeElement, ReplacementParser } from "../ReplacementParser.js";

export class TineNo extends ReplacementParser {
    image() {
        const ele = this.querySelector("img#HeaderMediaContent");
        return normalizeElement(ele, "src");
    }
}
