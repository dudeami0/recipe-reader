import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
export class SimplyRecipes extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }
    total_time() {
        const ele = this.querySelector("div.total-time span.meta-text__data");
        return normalizeElement(ele);
    }
    yields() {
        const ele = this.querySelector("div.recipe-serving span.meta-text__data");
        return normalizeElement(ele);
    }
    ingredients() {
        const ele = this.querySelectorAll("ul.ingredient-list li");
        return normalizeNodeList(ele);
    }
    instructions() {
        const ele = this.querySelectorAll("div.structured-project__steps>ol li");
        return normalizeNodeList(ele);
    }
}
//# sourceMappingURL=SimplyRecipes.js.map