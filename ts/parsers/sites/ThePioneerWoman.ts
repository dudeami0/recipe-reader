import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement, normalizeNodeList } from "../utils.js";

export class ThePioneerWoman extends ReplacementParser {
    author() {
        const ele = this.querySelector("address span");
        return normalizeElement(ele);
    }

    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }

    total_time() {
        const eles = this.querySelectorAll("div.recipe-summary-time dd");
        return eles.map((ele) => normalizeElement(ele)).join(" ");
    }

    ingredients() {
        const eles = this.querySelectorAll(".ingredient-lists li");
        return normalizeNodeList(eles);
    }

    instructions() {
        return this.querySelectorAll(".directions li li").map((ele) => {
            let text = "";
            ele.childNodes.forEach((node) => {
                if (node.nodeType === node.TEXT_NODE && node.textContent) {
                    text = node.textContent;
                }
            });

            return text.trim().replace(/[\n\r]/g, "");
        });
    }
}
