import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class LekkerEnSimpel extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1.hero__title");
        return normalizeElement(ele);
    }

    image() {
        const ele = this.querySelector(`meta[property="og:image"]`);
        return normalizeElement(ele, "content");
    }

    ingredients() {
        const eles = this.querySelectorAll("div.recipe__necessities li");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll("div.entry__content p");
        eles.shift(); // Remove description?
        return normalizeNodeList(eles);
    }

    description() {
        const ele = this.querySelector("div.entry__content p");
        return normalizeElement(ele);
    }

    language() {
        return "nl-NL";
    }
}
