import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeNodeList } from "../utils.js";

export class TasteOfHome extends ReplacementParser {
    instructions() {
        const eles = this.querySelectorAll("li.recipe-directions__item");
        return normalizeNodeList(eles);
    }
}
