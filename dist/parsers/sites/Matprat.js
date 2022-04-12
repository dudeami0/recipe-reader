import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
export class Matprat extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }
    total_time() {
        const ele = this.querySelector(`span[data-epi-property-name="RecipeTime"]`);
        return normalizeElement(ele);
    }
    yields() {
        const ele = this.querySelector("input#portionsInput");
        if (ele) {
            return normalizeElement(ele);
        }
        const ele2 = this.querySelector("div.recipe-adjust-servings__original-serving");
        return normalizeElement(ele2);
    }
    image() {
        const ele = this.querySelector("div.responsive-image img");
        return normalizeElement(ele, "src");
    }
    ingredients() {
        const eles = this.querySelectorAll(`.ingredients-list li[itemprop="ingredient"]`);
        return normalizeNodeList(eles);
    }
    instructions() {
        const eles = this.querySelectorAll("div.rich-text li");
        return normalizeNodeList(eles);
    }
    ratings() {
        const ele = this.querySelector(`span[data-bind="text: numberOfVotes"]`);
        return normalizeElement(ele);
    }
    description() {
        const ele = this.querySelector("div.article-intro");
        return normalizeElement(ele);
    }
}
//# sourceMappingURL=Matprat.js.map