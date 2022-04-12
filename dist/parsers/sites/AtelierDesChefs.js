import { ReplacementParser } from "../ReplacementParser.js";
export class AtelierDesChefs extends ReplacementParser {
    yields() {
        const ele = this.querySelector("option.yield");
        return ele ? `${ele.textContent} Servings` : super.yields();
    }
}
//# sourceMappingURL=AtelierDesChefs.js.map