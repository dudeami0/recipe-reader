import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeNodeList } from "../utils.js";

export class ZeitWochenmarkt extends ReplacementParser {
    ingredients() {
        const eles = this.querySelectorAll(
            "p.recipe-list-collection__special-ingredient"
        );
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll(
            ".article__subheading.article__subheading--recipe.article__item"
        );
        return normalizeNodeList(eles);
    }
}
