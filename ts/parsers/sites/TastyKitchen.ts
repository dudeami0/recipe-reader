import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement, normalizeNodeList } from "../utils.js";

export class TastyKitchen extends ReplacementParser {
    title() {
        return this.getOrig()._raw.name[0];
    }

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
