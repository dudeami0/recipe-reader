import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class JustBento extends ReplacementParser {
    private _ingredients: string[] = [];
    private _instructions: string[] = [];

    before_parse() {
        const ele = this.querySelector("div.field-name-body");
        if (ele) {
            const children: Element[] = Array.from(ele.children) || [];
            let step = 0;
            for (const child of children) {
                const tagName = child.tagName.toLowerCase();
                if (step == 0 && tagName === "h3") {
                    step++;
                } else if (step == 1 && tagName === "ul") {
                    const tmp = Array.from(child.querySelectorAll("li"));
                    this._ingredients = normalizeNodeList(tmp);
                    step++;
                } else if (step == 2 && tagName === "p") {
                    this._instructions.push(normalizeElement(child));
                }
            }
        }
    }

    title() {
        const ele = this.querySelector(`meta[property="og:title"]`);
        return normalizeElement(ele).replace("Recipe: ", "");
    }

    total_time() {
        const ele = this.querySelector(
            `div.field-name-taxonomy-vocabulary-2 a[typeof="skos:Concept]`
        );
        return normalizeElement(ele);
    }

    ingredients() {
        return this._ingredients;
    }

    instructions() {
        return this._instructions;
    }
}
