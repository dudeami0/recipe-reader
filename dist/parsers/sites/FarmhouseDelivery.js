import { normalizeElement, ReplacementParser } from "../ReplacementParser.js";
// This website seems to have changed, or uses different templates
// than the python version. Currently a TODO.
export class FarmhouseDelivery extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1.entry-title");
        return normalizeElement(ele);
    }
    ingredients() {
        // TODO Original method seems broken, now uses h5?
        return super.ingredients();
    }
    instructions() {
        // TODO Original method seems broken, now uses h5?
        return super.instructions();
    }
}
//# sourceMappingURL=FarmhouseDelivery.js.map