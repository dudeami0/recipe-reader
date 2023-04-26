import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class BBCFood extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }

    prep_time() {
        const ele = this.querySelector("p.recipe-metadata__prep-time");
        return normalizeElement(ele);
    }

    cook_time() {
        const ele = this.querySelector("p.recipe-metadata__cook-time");
        return normalizeElement(ele);
    }

    total_time() {
        return super.calc_total_time();
    }

    yields() {
        const ele = this.querySelector("p.recipe-metadata__serving");
        return normalizeElement(ele);
    }

    author() {
        const ele = this.querySelector(".chef__name");
        return normalizeElement(ele);
    }

    image() {
        const ele = this.querySelector(".recipe-media__image");
        return normalizeElement(ele, "src");
    }

    ingredients() {
        const eles = this.querySelectorAll("li.recipe-ingredients__list-item");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll("p.recipe-method__list-item-text");
        return normalizeNodeList(eles);
    }
}
