import { normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";

export class TasteOfHome extends ReplacementParser {
    instructions() {
        const eles = this.querySelectorAll("li.recipe-directions__item");
        return normalizeNodeList(eles);
    }
}
