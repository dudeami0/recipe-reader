import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement } from "../utils.js";

export class Saveur extends ReplacementParser {
    author() {
        const ele = this.querySelector(`[data-og-area="article-author"] a`);
        return normalizeElement(ele);
    }
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
