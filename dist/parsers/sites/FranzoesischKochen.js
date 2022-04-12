import { ReplacementParser } from "../ReplacementParser.js";
export class FranzoesischKochen extends ReplacementParser {
    author() {
        const data = super.author();
        if (data.Name) {
            return data.Name;
        }
        return data;
    }
}
//# sourceMappingURL=FranzoesischKochen.js.map