import { normalizeElement } from "../utils.js";
import { WordpressRecipe } from "./WordpressRecipe.js";

export class Joyfoodsunshine extends WordpressRecipe {
    author() {
        const ele = this.querySelector("span.entry-author-name");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("span.wprm-recipe-total_time-minutes");
        return normalizeElement(ele);
    }
}
