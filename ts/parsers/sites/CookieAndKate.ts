import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement, normalizeNodeList } from "../utils.js";

export class CookieAndKate extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1.entry-title");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("span.tasty-recipes-total-time");
        return normalizeElement(ele);
    }

    yields() {
        const ele = this.querySelector("span.tasty-recipes-yield");
        return normalizeElement(ele);
    }

    ingredients() {
        const eles = this.querySelectorAll("div.tasty-recipe-ingredients li");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll("div.tasty-recipe-instructions li");
        return normalizeNodeList(eles);
    }

    ratings() {
        const ele = this.querySelector("span.average");
        return normalizeElement(ele);
    }
}
