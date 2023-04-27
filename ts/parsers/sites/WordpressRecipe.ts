import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement, normalizeNodeList } from "../utils.js";

export class WordpressRecipe extends ReplacementParser {
    author() {
        const ele = this.querySelector(".wprm-recipe-author");
        return normalizeElement(ele);
    }

    title() {
        const ele = this.querySelector(".wprm-recipe-name");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector(
            ".wprm-recipe-total_time, .wprm-recipe-total_time-minutes"
        );
        return normalizeElement(ele);
    }

    image() {
        const ele = this.querySelector(".wprm-recipe-image img");
        return (
            normalizeElement(ele, "src") || normalizeElement(ele, "data-src")
        );
    }

    yields() {
        const ele = this.querySelector(".wprm-recipe-servings");
        return normalizeElement(ele);
    }

    ingredients() {
        const eles = this.querySelectorAll(".wprm-recipe-ingredient");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll(".wprm-recipe-instruction-text");
        return normalizeNodeList(eles);
    }

    ratings() {
        const ele = this.querySelector(".wprm-recipe-rating-average");
        return normalizeElement(ele);
    }
}
