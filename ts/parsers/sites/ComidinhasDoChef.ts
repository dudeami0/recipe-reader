import { normalizeElement, ReplacementParser } from "../ReplacementParser.js";

export class ComidinhasDoChef extends ReplacementParser {
    author() {
        const ele = this.querySelector("span.theauthor");
        return normalizeElement(ele);
    }

    title() {
        const ele = this.querySelector("h1.title");
        return normalizeElement(ele);
    }
}
