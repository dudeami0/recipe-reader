import { normalizeElement, ReplacementParser } from "../ReplacementParser.js";
export class OneHundredOneCookBooks extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }
    yields() {
        const ele = this.querySelector("p:nth-child(3)");
        return normalizeElement(ele);
    }
    ingredients() {
        const ele = this.querySelector("blockquote p");
        return normalizeElement(ele);
    }
    instructions() {
        const ele = this.querySelector("p:nth-child(2)");
        return normalizeElement(ele);
    }
}
//# sourceMappingURL=OneHundredOneCookBooks.js.map