import jsdom from "jsdom";
import { normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";

const { JSDOM } = jsdom;

export class KingArthur extends ReplacementParser {
    instructions() {
        let instructions = super.instructions();
        if (instructions instanceof String) {
            const eles = new JSDOM(
                <string>instructions
            ).window.document.querySelectorAll("p");
            if (eles) {
                instructions = normalizeNodeList(Array.from(eles));
            }
        }
        return instructions;
    }
}
