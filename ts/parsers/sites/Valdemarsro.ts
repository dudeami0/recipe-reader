import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement } from "../utils.js";

export class Valdemarsro extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }

    category() {
        const ele = this.querySelector(`div.recipe-bar a:not([href*="/tag/"])`);
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("span.recipe-stat-label", "Tid i alt");
        return normalizeElement(ele);
    }

    yields() {
        const ele = this.querySelector("i.fa-sort");
        if (ele) {
            return normalizeElement(ele.parentElement);
        }
        return super.yields();
    }

    image() {
        const ele = this.querySelector("div.recipe-image img");
        return normalizeElement(ele, "src");
    }
}
