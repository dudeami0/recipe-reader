import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeNodeList } from "../utils.js";

export class CookingLight extends ReplacementParser {
    ingredients() {
        const eles = this.querySelectorAll("div.ingredients>ul li");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll("div.recipe-instructions div.step");
        return normalizeNodeList(eles);
    }
}
