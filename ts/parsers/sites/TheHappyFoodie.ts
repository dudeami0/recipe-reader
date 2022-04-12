import { normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";

export class TheHappyFoodie extends ReplacementParser {
    ingredients() {
        const eles = this.querySelectorAll("div.hf-ingredients__container tr");
        return normalizeNodeList(eles);
    }
}
