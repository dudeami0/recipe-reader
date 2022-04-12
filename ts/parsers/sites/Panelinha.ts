import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class Panelinha extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("span", "Tempo de preparo");
        if (ele) {
            return normalizeElement(ele.nextElementSibling);
        }
        return super.total_time();
    }

    ingredients() {
        const ele = this.querySelector("span", "Tempo de preparo");
        if (ele) {
            const eles = Array.from(ele.querySelectorAll("li"));
            return normalizeNodeList(eles);
        }
        return super.total_time();
    }

    instructions() {
        const ele = this.querySelector("h4", "Modo de preparo");
        if (ele) {
            const eles = Array.from(ele.querySelectorAll("li, p"));
            return normalizeNodeList(eles);
        }
        return super.instructions();
    }

    yields() {
        const ele = this.querySelector("span", "Serve");
        if (ele) {
            return normalizeElement(ele.nextElementSibling);
        }
        return super.yields();
    }
}
