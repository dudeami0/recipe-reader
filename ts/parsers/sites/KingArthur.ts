import { ReplacementParser } from "../ReplacementParser.js";

export class KingArthur extends ReplacementParser {
    instructions() {
        let instructions = super.instructions();
        // TODO Resolve this without adding jsdom
        // if (instructions instanceof String) {
        //     const eles = new JSDOM(
        //         <string>instructions
        //     ).window.document.querySelectorAll("p");
        //     if (eles) {
        //         instructions = normalizeNodeList(Array.from(eles));
        //     }
        // }
        return instructions;
    }
}
