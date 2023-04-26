import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

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
