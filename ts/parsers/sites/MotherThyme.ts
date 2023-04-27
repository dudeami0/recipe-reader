import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeNodeList, normalizeString } from "../utils.js";

export class MotherThyme extends ReplacementParser {
    ingredients() {
        const eles = this.querySelectorAll(
            ".tasty-recipes-description>ul:nth-child(1) li"
        );
        return normalizeNodeList(eles);
    }

    instructions() {
        return this.raw().recipeIngredient.map(normalizeString);
    }
}
