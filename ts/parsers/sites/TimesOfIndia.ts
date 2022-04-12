import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class TimesOfIndia extends ReplacementParser {
    ingredients() {
        const eles = this.querySelectorAll("label.clearfix");
        return normalizeNodeList(eles);
    }

    language() {
        const ele = this.querySelector(`meta[http-equiv="content-language"]`);
        return normalizeElement(ele);
    }
}
