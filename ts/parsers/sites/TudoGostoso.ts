import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class TudoGostoso extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("time.dt-duration");
        return normalizeElement(ele);
    }

    ingredients() {
        const eles = this.querySelectorAll("span.p-ingredient");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll("div.instructions.e-instructions");
        return normalizeNodeList(eles);
    }
}
