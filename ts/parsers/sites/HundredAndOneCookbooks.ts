import { normalizeElement, normalizeNodeList } from "../ReplacementParser.js";
import { WordpressRecipe } from "./WordpressRecipe.js";

export class HundredAndOneCookbooks extends WordpressRecipe {
    title() {
        const ele = this.querySelector(".wprm-recipe-container h2");
        return normalizeElement(ele);
    }

    ingredients() {
        const eles = this.querySelectorAll(".cb101-recipe-ingredient");
        return normalizeNodeList(eles);
    }
}
