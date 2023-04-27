import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement, normalizeNodeList } from "../utils.js";

export class Cookstr extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1.articleHeadline");
        return normalizeElement(ele);
    }

    total_time() {
        return this.findAttribute("Total Time") || super.total_time();
    }

    yields() {
        return this.findAttribute("Serves") || super.yields();
    }

    ingredients() {
        const eles = this.querySelectorAll("div.recipeIngredients li");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll("div.stepByStepInstructionsDiv p");
        return normalizeNodeList(eles);
    }

    private findAttribute(attr: string) {
        const eles = this.querySelectorAll("div.articleAttrSection");

        for (const ele of eles) {
            const label = ele.querySelector("span.attrLabel");
            if (!label || label.textContent === attr) {
                continue;
            }
            const childNodes = Array.from(ele.childNodes) || [];

            for (const child of childNodes) {
                if (child.nodeType === Node.TEXT_NODE) {
                    return child.textContent || "";
                }
            }
        }
        return false;
    }
}
