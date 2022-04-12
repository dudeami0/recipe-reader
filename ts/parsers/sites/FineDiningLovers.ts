import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class FineDiningLovers extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1.recipe-full-class");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("div.timing");
        return normalizeElement(ele);
    }

    yields() {
        const ele = this.querySelector(
            "div.field--name-field-recipe-serving-num"
        );
        return normalizeElement(ele);
    }

    ingredients() {
        const eles = this.querySelectorAll(
            "div.ingredients-box div.paragraph--type--recipe-ingredient"
        );
        return normalizeNodeList(eles);
    }
    instructions() {
        const eles = this.querySelectorAll(
            "div.field--name.field-recipe-para-steps " +
                "div.paragraph--type--recipe-step"
        );
        return normalizeNodeList(eles);
    }

    image() {
        const ele = this.querySelector(".image-zone, picture, img");
        const raw = ele ? ele.getAttribute("data-src") : "";
        if (raw) {
            return "https://www.finedininglovers.com" + raw.split(":")[0];
        }
        return "";
    }
}
