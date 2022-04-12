import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class WikiCookbook extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("th", "Time");
        if (ele) {
            return normalizeElement(ele.nextElementSibling);
        }
        return super.total_time();
    }

    yields() {
        const ele = this.querySelector("th", "Servings");
        if (ele) {
            return normalizeElement(ele.nextElementSibling);
        }
        return super.total_time();
    }

    image() {
        const ele = this.querySelector("a.image img");
        return normalizeElement(ele, "src");
    }

    ingredients() {
        const ele = this.querySelector("#Ingredients");
        if (ele) {
            const eles = Array.from(ele.nextElementSibling?.children || []);
            return normalizeNodeList(eles);
        }
        return super.ingredients();
    }

    instructions() {
        const ele = this.querySelector("#Procedure");
        if (ele) {
            const eles = Array.from(ele.nextElementSibling?.children || []);
            return normalizeNodeList(eles);
        }
        return super.instructions();
    }
}
