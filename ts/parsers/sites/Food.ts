import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class Food extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("div.recipe-facts__time");
        return normalizeElement(ele);
    }

    yields() {
        const ele = this.querySelector("div.recipe-facts__servings");
        return normalizeElement(ele);
    }

    ingredients() {
        const eles = this.querySelectorAll("li.recipe-ingredients__item");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll("li.recipe-directions__step");
        return normalizeNodeList(eles);
    }
}
