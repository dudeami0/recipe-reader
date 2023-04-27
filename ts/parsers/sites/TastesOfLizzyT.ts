import { normalizeElement } from "../utils.js";
import { WordpressRecipe } from "./WordpressRecipe.js";

export class TastesOfLizzyT extends WordpressRecipe {
    total_time() {
        const ele = this.querySelector(".wprm-recipe-total-time-container");
        return normalizeElement(ele);
    }
}
