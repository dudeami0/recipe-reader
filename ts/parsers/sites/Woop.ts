import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement, normalizeNodeList } from "../utils.js";

export class Woop extends ReplacementParser {
    title() {
        const ele = this.querySelector(`h1`);
        return normalizeElement(ele);
    }

    ingredients() {
        const eles = this.querySelectorAll(".ingredients li");
        return normalizeNodeList(eles).filter((str) => str.length > 0);
    }

    yields() {
        const ele = this.querySelector("div.serving-amount div.value");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("div.cook-time p");
        return normalizeElement(ele);
    }

    instructions() {
        const eles = this.querySelectorAll("div.cooking-instructions li");
        return normalizeNodeList(eles);
    }

    nutrients() {
        const eles = this.querySelectorAll(
            "div.nutritional-info:nth-child(1) li"
        );
        return normalizeNodeList(eles);
    }
}
