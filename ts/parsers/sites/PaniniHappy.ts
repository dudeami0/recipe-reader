import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class PaniniHappy extends ReplacementParser {
    author() {
        const ele = this.querySelector(".author");
        return normalizeElement(ele);
    }
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("span.duration");
        return normalizeElement(ele);
    }

    yields() {
        const ele = this.querySelector("span.yield");
        return normalizeElement(ele);
    }

    image() {
        const ele = this.querySelector("img.post_image");
        return normalizeElement(ele, "src");
    }

    ingredients() {
        const eles = this.querySelectorAll("li.ingredient");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll("li.instruction");
        return normalizeNodeList(eles);
    }
}
