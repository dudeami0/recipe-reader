import { normalizeElement } from "../utils.js";
import { WordpressRecipe } from "./WordpressRecipe.js";

export class KennyMcGovern extends WordpressRecipe {
    author() {
        const ele = this.querySelector(".author");
        return normalizeElement(ele);
    }
}
