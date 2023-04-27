import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement, normalizeNodeList } from "../utils.js";

export class NIHHealthyEating extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }

    prep_time() {
        const ele = this.querySelector(
            "table.recipe_time_table td:nth-child(1)"
        );
        return normalizeElement(ele);
    }

    cook_time() {
        const ele = this.querySelector(
            "table.recipe_time_table td:nth-child(2)"
        );
        return normalizeElement(ele);
    }

    total_time() {
        return this.calc_total_time();
    }

    yields() {
        const ele = this.querySelector(
            "table.recipe_time_table td:nth-child(3)"
        );
        return normalizeElement(ele);
    }

    image() {
        const ele = this.querySelector("img.recipe_image");
        return normalizeElement(ele);
    }

    ingredients() {
        const eles = this.querySelectorAll("div#ingredients p");
        return normalizeNodeList(eles).filter(
            (str) => str.indexOf("recipe cards") === -1
        );
    }

    instructions() {
        const eles = this.querySelectorAll(
            "div#recipe_directions div.steptext"
        );
        return normalizeNodeList(eles);
    }
}
