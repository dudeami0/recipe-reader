import { normalizeElement, ReplacementParser } from "../ReplacementParser.js";
export class ClosetCooking extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1.entry-title");
        return normalizeElement(ele);
    }
}
//# sourceMappingURL=ClosetCooking.js.map