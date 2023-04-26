import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class SimplyRecipes extends ReplacementParser {
    author() {
        const ele = this.querySelector(".lifestyle-food-bylines a");
        return normalizeElement(ele);
    }

    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("div.total-time span.meta-text__data");
        return normalizeElement(ele);
    }

    yields() {
        const ele = this.querySelector(
            "div.recipe-serving span.meta-text__data"
        );
        return normalizeElement(ele);
    }

    ingredients() {
        const eles = this.querySelectorAll(".section--ingredients ul li");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll(".section--instructions ol li");
        return normalizeNodeList(eles);
    }
}
