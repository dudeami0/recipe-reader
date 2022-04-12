import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class MyBakingAddiction extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("div.mv-create-time-total");
        return normalizeElement(ele);
    }

    yields() {
        const ele = this.querySelector("div.mv-create-time-yield");
        return normalizeElement(ele);
    }

    ingredients() {
        const eles = this.querySelectorAll("div.mv-create-ingredients li");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll("div.mx-create-instructions li");
        return normalizeNodeList(eles);
    }

    ratings() {
        const ele = this.querySelector("div.mv-create-reviews");
        return normalizeElement(ele, "data-mv-create-rating");
    }
}
