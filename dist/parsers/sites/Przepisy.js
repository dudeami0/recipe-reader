import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
export class Przepisy extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1.title");
        return normalizeElement(ele);
    }
    total_time() {
        const ele = this.querySelector("div.time-count");
        return normalizeElement(ele);
    }
    yields() {
        const ele = this.querySelector("div.person-count");
        return normalizeElement(ele);
    }
    ingredients() {
        const eles = this.querySelectorAll("span.text-bg-white");
        return normalizeNodeList(eles);
    }
    instructions() {
        const eles = this.querySelectorAll("p.step-info-description");
        return normalizeNodeList(eles);
    }
}
//# sourceMappingURL=Przepisy.js.map