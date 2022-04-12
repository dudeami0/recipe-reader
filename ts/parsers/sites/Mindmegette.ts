import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class Mindmegette extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1.title");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("span.spriteTime");
        if (ele) {
            return normalizeElement(ele.nextElementSibling);
        }
        return super.total_time();
    }

    ingredients() {
        const eles = this.querySelectorAll("ul.shopingCart li");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll("div.instructions li");
        return normalizeNodeList(eles);
    }

    yields() {
        const ele = this.querySelector("span.spritePortion");
        if (ele) {
            return normalizeElement(ele.nextElementSibling);
        }
        return super.yields();
    }
}
