import { normalizeElement } from "../ReplacementParser.js";
import { WordpressRecipe } from "./WordpressRecipe.js";
export class WhatsGabyCooking extends WordpressRecipe {
    title() {
        const ele = this.querySelector("h1.entry-title");
        return normalizeElement(ele);
    }
    total_time() {
        const ele = this.querySelector("p.header-recipe-time");
        return normalizeElement(ele);
    }
}
//# sourceMappingURL=WhatsGabyCooking.js.map