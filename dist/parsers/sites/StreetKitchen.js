import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
export class StreetKitchen extends ReplacementParser {
    author() {
        const ele = this.querySelector(`a[rel="author"]:nth-child(2)`);
        return normalizeElement(ele);
    }
    title() {
        const ele = this.querySelector("h1.entry-title");
        return normalizeElement(ele);
    }
    image() {
        const ele = this.querySelector("div.article-featured-image-bg noscript img");
        return normalizeElement(ele, "src");
    }
    ingredients() {
        const eles = this.querySelectorAll("div.ingredient-group dd");
        return normalizeNodeList(eles);
    }
    instructions() {
        const eles = this.querySelectorAll("div.the-content-div p");
        return normalizeNodeList(eles);
    }
    yields() {
        const ele = this.querySelector("span.quantity-number");
        return normalizeElement(ele);
    }
}
//# sourceMappingURL=StreetKitchen.js.map