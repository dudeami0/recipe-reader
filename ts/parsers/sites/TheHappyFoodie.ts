import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeNodeList } from "../utils.js";

export class TheHappyFoodie extends ReplacementParser {
    ingredients() {
        const eles = this.querySelectorAll("div.hf-ingredients__container tr");
        return normalizeNodeList(eles);
    }
}
