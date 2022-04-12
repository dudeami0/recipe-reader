import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class PopSugar extends ReplacementParser {
    title() {
        const ele = this.querySelector("h2.recipe-title");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("dt", "Total Time");
        if (ele) {
            return normalizeElement(ele.nextElementSibling);
        }
        return super.total_time();
    }

    yields() {
        const ele = this.querySelector("dt", "Yield");
        if (ele) {
            return normalizeElement(ele.nextElementSibling);
        }
        return super.yields();
    }

    image() {
        const ele = this.querySelector("article");
        return normalizeElement(ele, "data-share-image");
    }

    ingredients() {
        const ele = this.querySelector("h3", "Ingredients");
        if (ele) {
            const eles = Array.from(ele.nextElementSibling?.children || []);
            return normalizeNodeList(eles);
        }
        return super.ingredients();
    }

    instructions() {
        const ele = this.querySelector("h3", "Directions");
        if (ele) {
            const eles = Array.from(ele.nextElementSibling?.children || []);
            return normalizeNodeList(eles);
        }
        return super.instructions();
    }
}
