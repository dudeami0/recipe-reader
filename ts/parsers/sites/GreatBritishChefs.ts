import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class GreatBritishChefs extends ReplacementParser {
    author() {
        const ele = this.querySelector(".Author__Name");
        return normalizeElement(ele);
    }

    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector(
            "span.RecipeAttributes__Time span.header-attribute-text"
        );
        return normalizeElement(ele);
    }

    yields() {
        const ele = this.querySelector(
            "span.RecipeAttributes__Serves span.header-attribute-text"
        );
        return normalizeElement(ele);
    }

    image() {
        const ele = this.querySelector("img.head-media");
        return normalizeElement(ele, "src");
    }

    ingredients() {
        const eles = this.querySelectorAll(
            "ul.IngredientsList__ListContainer li"
        );
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll(
            "div.Method__List.MethodList div.MethodList__StepText"
        );
        return normalizeNodeList(eles);
    }

    description(): string {
        const ele = this.querySelector("div.RecipeAbstract__Abstract");
        return normalizeElement(ele);
    }
}
