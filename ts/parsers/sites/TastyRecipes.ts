import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class TastyRecipes extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }

    prep_time() {
        const ele = this.querySelector("span.tasty-recipes-prep-time");
        return normalizeElement(ele);
    }

    cook_time() {
        const ele = this.querySelector("span.tasty-recipes-cook-time");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("span.tasty-recipes-total-time");
        return normalizeElement(ele);
    }

    yields() {
        const ele = this.querySelector("span.tasty-recipes-yield");
        return normalizeElement(ele);
    }

    ingredients() {
        const eles = this.querySelectorAll(
            ".tasty-recipe-ingredients>ul>li,li.ingredient"
        );
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll("div.tasty-recipe-instructions");
        return normalizeNodeList(eles);
    }

    ratings() {
        const ele = this.querySelector("div.tasty-recipe-rating.rating_panel");
        return normalizeElement(ele, "data-content-rate").replace(",", ".");
    }
}
