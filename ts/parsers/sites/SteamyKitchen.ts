import { normalizeElement, ReplacementParser } from "../ReplacementParser.js";

export class SteamyKitchen extends ReplacementParser {
    image() {
        const ele = this.querySelector("img");
        return normalizeElement(ele, "src");
    }
}
