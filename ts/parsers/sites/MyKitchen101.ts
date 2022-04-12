import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class MyKitchen101 extends ReplacementParser {
    author() {
        const ele = this.querySelector(`a[rel="author"]`);
        return normalizeElement(ele);
    }

    title() {
        const ele = this.querySelector("h1.entry-title");
        return normalizeElement(ele);
    }

    yields() {
        const ele = this.querySelector("p", "分量：");
        return normalizeElement(ele);
    }

    ingredients() {
        const ele = this.querySelector("p", "材料：");
        if (ele) {
            const eles = Array.from(ele.querySelectorAll("ul:nth-child(1) li"));
            return normalizeNodeList(eles);
        }
        return super.ingredients();
    }

    instructions() {
        const ele = this.querySelector("p", "做法：");
        if (ele) {
            const eles = Array.from(ele.querySelectorAll("p"));
            return normalizeNodeList(eles);
        }
        return super.instructions();
    }
}
