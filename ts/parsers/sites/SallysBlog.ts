import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class SallysBlog extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1.blog--detail-headline");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("span#zubereitungszeit");
        return normalizeElement(ele);
    }

    yields() {
        const ele = this.querySelector("input.float-left");
        const ele2 = this.querySelector("span#is_singular");
        return normalizeElement(ele, "value") + " " + normalizeElement(ele2);
    }

    ingredients() {
        const eles = this.querySelectorAll("li.quantity");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll(
            "div.blog--detail-description.block " +
                "div.content_type_2.content_type_3.content_type_4"
        );
        return normalizeNodeList(eles);
    }
}
