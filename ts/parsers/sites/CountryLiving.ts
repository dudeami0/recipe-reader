import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class CountryLiving extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1.content-hed.recipe-hed");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("span.total-time-amount");
        return normalizeElement(ele ? ele.parentElement : null);
    }

    yields() {
        const ele = this.querySelector("div.recipe-details-item.yields");
        return normalizeElement(ele);
    }

    ingredients() {
        const eles = this.querySelectorAll("div.ingredient-item");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll("div.directions-lists li");
        return normalizeNodeList(eles);
    }
}
