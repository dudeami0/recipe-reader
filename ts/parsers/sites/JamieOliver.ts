import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class JamieOliver extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("div.time");
        return normalizeElement(ele);
    }

    yields() {
        const ele = this.querySelector("div.recipe-detail.serves");
        return normalizeElement(ele);
    }

    image() {
        const ele = this.querySelector("div.recipe-header-left");
        return normalizeElement(ele, "src");
    }

    ingredients() {
        const eles = this.querySelectorAll("ul.ingred-list li");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll("ol.recipeSteps li");
        return normalizeNodeList(eles);
    }
}
