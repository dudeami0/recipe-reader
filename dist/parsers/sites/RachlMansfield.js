import { ReplacementParser } from "../ReplacementParser.js";
export class RachlMansfield extends ReplacementParser {
    prep_time() {
        return this.getOrig().prepTime;
    }
    cook_time() {
        return this.getOrig().cookTime;
    }
    total_time() {
        return this.calc_total_time();
    }
}
//# sourceMappingURL=RachlMansfield.js.map