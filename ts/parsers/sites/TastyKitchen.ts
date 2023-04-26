import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class TastyKitchen extends ReplacementParser {
    total_time() {
        return this.calc_total_time();
    }

    image() {
        const ele = this.querySelector("img.the_recipe_image");
        return normalizeElement(ele, "src");
    }

    ingredients() {
        const eles = this.querySelectorAll("ul.ingredients li");
        return normalizeNodeList(eles);
    }
}
