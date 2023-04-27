import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement } from "../utils.js";

export class SteamyKitchen extends ReplacementParser {
    image() {
        const ele = this.querySelector("img");
        return normalizeElement(ele, "src");
    }
}
