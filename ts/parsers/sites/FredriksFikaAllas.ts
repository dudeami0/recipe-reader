import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement } from "../utils.js";

export class FredriksFikaAllas extends ReplacementParser {
    private _ingredients: string[] = [];
    private _instructions: string[] = [];

    before_parse() {
        const ele = this.querySelector("strong", "Ingredienser");
        if (ele) {
            const lines = (ele.parentElement?.textContent || "").split("\n");
            let cur = this._ingredients;
            for (const line of lines) {
                if (line.indexOf("Ingredienser") !== -1) {
                    continue;
                }
                cur.push(line.replace("Gör så här", ""));
                if (lines.indexOf("Gör så här") !== -1) {
                    cur = this._instructions;
                }
            }
        }
    }

    author() {
        const ele = this.querySelector("div.c-post_author__name");
        return normalizeElement(ele);
    }

    title() {
        const ele = this.querySelector("div.c-post_title");
        return normalizeElement(ele);
    }

    category() {
        const ele = this.querySelector("div.c-post_author__category");
        return normalizeElement(ele);
    }

    ingredients() {
        return this._ingredients;
    }

    instructions() {
        return this._instructions;
    }
}
