import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement } from "../utils.js";

export class Rezeptwelt extends ReplacementParser {
    author() {
        const ele = this.querySelector("span.recipe-author");
        return normalizeElement(ele);
    }

    title() {
        const ele = this.querySelector(`meta[property="og:title"]`);
        return normalizeElement(ele, "content");
    }

    language() {
        const ele = this.querySelector(`meta[property="og:locale"]`);
        return normalizeElement(ele, "content");
    }
}
