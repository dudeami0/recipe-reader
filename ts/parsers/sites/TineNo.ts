import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement } from "../utils.js";

export class TineNo extends ReplacementParser {
    image() {
        const ele = this.querySelector("img#HeaderMediaContent");
        return normalizeElement(ele, "src");
    }
}
