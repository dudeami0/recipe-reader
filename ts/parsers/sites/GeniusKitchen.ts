import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement, normalizeNodeList } from "../utils.js";

export class GeniusKitchen extends ReplacementParser {
    title() {
        const ele = this.querySelector("title");
        return normalizeElement(ele).replace(" Recipe - Genius Kitchen", "");
    }

    total_time() {
        const ele = this.querySelector("td.time");
        return normalizeElement(ele);
    }

    yields() {
        const ele = this.querySelector("td.servings span.count");
        return normalizeElement(ele);
    }

    ingredients() {
        const eles = this.querySelectorAll("ul.ingredient-list li");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll(
            "div.directions-inner.container-xs ol li"
        );
        return normalizeNodeList(eles).filter(
            (ele) => ele.indexOf("Submit a Correct") !== -1
        );
    }

    ratings() {
        const ele = this.querySelector("span.sr-only");
        return normalizeElement(ele);
    }
}
