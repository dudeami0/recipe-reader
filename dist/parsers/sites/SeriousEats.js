import { normalizeElement, ReplacementParser } from "../ReplacementParser.js";
export class SeriousEats extends ReplacementParser {
    yields() {
        const ele = this.querySelector(".recipe-serving, .recipe-yield");
        return normalizeElement(ele);
    }
}
//# sourceMappingURL=SeriousEats.js.map