import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class TheSpruceEats extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1.heading__title");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("span", "Total: ");
        if (ele) {
            return normalizeElement(ele.nextElementSibling);
        }
        return super.total_time();
    }

    yields() {
        const ele = this.querySelector("span", "Servings: ");
        if (ele) {
            return normalizeElement(ele.nextElementSibling);
        }
        return super.yields();
    }

    image() {
        const ele = this.querySelector("img.primary-image");
        return normalizeElement(ele, "src");
    }

    ingredients() {
        const eles = this.querySelectorAll(
            "section.section--ingredients li.structured-ingredients__list-item, " +
                "section.section--ingredients li.ingredient"
        );
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll(
            "section.section--instructions ol li"
        );
        return normalizeNodeList(eles);
    }
}
