import { normalizeElement, ReplacementParser } from "../ReplacementParser.js";

export class ComidinhasDoChef extends ReplacementParser {
    author() {
        const ele = this.querySelector(".author");
        return normalizeElement(ele);
    }

    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }
}
