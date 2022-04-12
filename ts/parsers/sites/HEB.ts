import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class HEB extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1.title");
        return normalizeElement(ele);
    }

    image() {
        const ele = this.querySelector("div.recipeimage img");
        return normalizeElement(ele, "src");
    }

    ingredients() {
        const eles = this.querySelectorAll(
            ".ingredientwrapper div.recipestepstxt"
        );
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll(
            "div.instructions span.instructiontxt"
        );
        return normalizeNodeList(eles);
    }
}
