import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
export class KuchniaDomowa extends ReplacementParser {
    title() {
        const ele = this.querySelector("h2");
        return normalizeElement(ele);
    }
    image() {
        const eles = this.querySelectorAll("img.article-img");
        return eles ? normalizeElement(eles[1] || null, "src") : "";
    }
    instructions() {
        const eles = this.querySelectorAll("#recipe-instructions li");
        return normalizeNodeList(eles);
    }
}
//# sourceMappingURL=KuchniaDomowa.js.map