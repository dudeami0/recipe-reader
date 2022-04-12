import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class TheKitchn extends ReplacementParser {
    title() {
        const ele = this.querySelector("h2.Recipe__title");
        return normalizeElement(ele);
    }

    prep_time() {
        const ele = this.querySelector("p.Recipe_timeEntry:nth-child(1)");
        return normalizeElement(ele);
    }

    cook_time() {
        const ele = this.querySelector("p.Recipe_timeEntry:nth-child(2)");
        return normalizeElement(ele);
    }

    total_time() {
        return this.calc_total_time();
    }

    yields() {
        const ele = this.querySelector("p.Recipe__yield");
        return normalizeElement(ele);
    }

    ingredients() {
        const eles = this.querySelectorAll("li.Recipe__ingredient");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll("li.Recipe__instructionStep");
        return normalizeNodeList(eles);
    }
}
