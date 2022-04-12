import { normalizeElement, ReplacementParser } from "../ReplacementParser.js";
export class Saveur extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }
    prep_time() {
        const ele = this.querySelector(`meta[property="prepTime"]`);
        return normalizeElement(ele);
    }
    cook_time() {
        const ele = this.querySelector(`meta[property="cookTime"]`);
        return normalizeElement(ele);
    }
    total_time() {
        return this.calc_total_time();
    }
}
//# sourceMappingURL=Saveur.js.map