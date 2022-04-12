import { ReplacementParser } from "../ReplacementParser.js";

export class FranzoesischKochen extends ReplacementParser {
    author() {
        const data = <any>super.author();
        if (data.Name) {
            return data.Name;
        }
        return <string>data;
    }
}
