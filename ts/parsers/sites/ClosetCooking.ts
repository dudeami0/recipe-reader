import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement } from "../utils.js";

export class ClosetCooking extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1.entry-title");
        return normalizeElement(ele);
    }
}
