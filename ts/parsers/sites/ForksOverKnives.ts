import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement } from "../utils.js";

export class ForksOverKnives extends ReplacementParser {
    author() {
        const ele = this.querySelector("div.post-info a");
        return normalizeElement(ele);
    }

    yields() {
        const ele = this.querySelector("i.icon-serving");
        if (ele !== null) {
            return normalizeElement(ele.nextElementSibling);
        }
        return super.yields();
    }

    ratings() {
        const ele = this.querySelector("div.headline span.rated-count");
        return normalizeElement(ele);
    }
}
