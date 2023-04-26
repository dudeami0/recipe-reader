import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
export class Yummly extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }
    total_time() {
        const ele = this.querySelector("div.recipe-summary-item:nth-child(2)");
        return normalizeElement(ele);
    }
    yields() {
        const ele = this.querySelector("div.servings");
        return normalizeElement(ele);
    }
    ingredients() {
        const eles = this.querySelectorAll("li.IngredientLine");
        return normalizeNodeList(eles);
    }
    instructions() {
        const eles = this.querySelectorAll("li.prep-step");
        return normalizeNodeList(eles);
    }
}
//# sourceMappingURL=Yummly.js.map