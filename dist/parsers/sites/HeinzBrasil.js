import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
// Could not find a link to a recipe, all search results turned up 404s
export class HeinzBrasil extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1.krRDPrecName");
        return normalizeElement(ele);
    }
    image() {
        const ele = this.querySelector("img.krBanImg");
        return normalizeElement(ele, "src");
    }
    ingredients() {
        const eles = this.querySelectorAll("div.krRDPIngreListText");
        return normalizeNodeList(eles);
    }
    instructions() {
        const ele = this.querySelector("div.krRecipeMakeItText");
        return normalizeElement(ele); // This is probably wrong
    }
}
//# sourceMappingURL=HeinzBrasil.js.map