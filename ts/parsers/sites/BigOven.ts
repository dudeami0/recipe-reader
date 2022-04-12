import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class BigOven extends ReplacementParser {
    yields() {
        const ele = this.querySelector("div.yield");
        return normalizeElement(ele);
    }

    ingredients() {
        const eles = this.querySelectorAll("div.yield li");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll("div.instructions p");
        return normalizeNodeList(eles);
    }

    ratings() {
        const rating = this.querySelector("div.recipe-rating span.rating");
        return parseFloat(normalizeElement(rating)).toFixed(2);
    }
}
