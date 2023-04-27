import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement, normalizeNodeList } from "../utils.js";

export class CookieCircle extends ReplacementParser {
    author() {
        const ele = this.querySelector("div.recipe-author span.text-uppercase");
        return normalizeElement(ele);
    }

    total_time() {
        const eles = this.querySelectorAll(
            "ul.single-method-overview__times li"
        );
        const ele = eles.filter((ele) => {
            const text = ele.querySelector("span:nth-child(1)");
            return (
                text?.textContent?.toLowerCase().indexOf("total time:") !== -1
            );
        })[0];
        return normalizeElement(ele);
    }

    ingredients() {
        const eles = this.querySelectorAll(
            `div.single-ingredients__group[data-unit="metric"] ` +
                `ul.single-ingredents__list li`
        );
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll("ul.single-method__method>li");
        return normalizeNodeList(eles);
    }
}
