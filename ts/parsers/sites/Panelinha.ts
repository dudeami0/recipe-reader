import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class Panelinha extends ReplacementParser {
    total_time() {
        const ele = this.querySelector("span", "Tempo de preparo");
        if (ele) {
            return normalizeElement(ele.nextElementSibling);
        }
        return super.total_time();
    }

    ingredients() {
        const eles = this.querySelectorAll("main section:nth-child(1) ul li");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll("main section:nth-child(1) ol li");
        return normalizeNodeList(eles);
    }

    yields() {
        const ele = this.querySelector("span", "Serve");
        if (ele) {
            return normalizeElement(ele.nextElementSibling);
        }
        return super.yields();
    }
}
