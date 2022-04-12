import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class FitMenCook extends ReplacementParser {
    title() {
        const ele = this.querySelector("h2.gap-none");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("span.total-time");
        return normalizeElement(ele);
    }

    yields() {
        const ele = this.querySelector("h4 strong");
        const childNodes: ChildNode[] = ele ? Array.from(ele.childNodes) : [];
        for (const child of childNodes) {
            if (child.nodeType == Node.TEXT_NODE) {
                const text = child.textContent || "";
                return (
                    text.split(" ").filter((a) => parseInt(a) > 0)[0] +
                    "servings"
                );
            }
        }
        return super.yields();
    }

    ingredients() {
        const eles = this.querySelectorAll("div.recipe-ingredients li");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll("div.recipes-steps li");
        return normalizeNodeList(eles);
    }
}
