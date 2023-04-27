import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement, normalizeNodeList } from "../utils.js";

export class Food52 extends ReplacementParser {
    total_time() {
        const ele = this.querySelector("ul.recipe__details");
        return normalizeElement(ele);
    }

    instructions() {
        const eles = this.querySelectorAll("li.recipe__list-step");
        return normalizeNodeList(eles);
    }
}
