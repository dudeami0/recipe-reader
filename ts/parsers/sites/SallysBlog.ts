import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement, normalizeNodeList } from "../utils.js";

export class SallysBlog extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }

    prep_time() {
        const ele = this.querySelectorAll("h6")[0];
        return normalizeElement(ele);
    }

    cook_time(): string {
        const ele = this.querySelectorAll("h6")[1];
        return normalizeElement(ele);
    }

    yields() {
        const ele = this.querySelector("input[type=number]");
        const ele2 =
            this.querySelector(
                ".order-1 h4"
            )?.nextElementSibling?.querySelector(".text-lg");
        return (
            normalizeElement(ele, "value") +
            " " +
            (ele2 ? normalizeElement(ele2) : "servings")
        );
    }

    ingredients() {
        const eles = this.querySelectorAll(".filter-box>.items-start");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll(".recipe-description .prose");
        return normalizeNodeList(eles);
    }
}
