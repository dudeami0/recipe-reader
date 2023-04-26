import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class WikiCookbook extends ReplacementParser {
    private _ingredients: string[] = [];
    private _instructions: string[] = [];

    before_parse() {
        const ele = this.querySelector(".mw-parser-output");
        if (ele) {
            const children = Array.from(ele.children || []);
            let isIngredients = false;
            let isProcedure = false;
            for (const child of children) {
                if (child.matches("h2")) {
                    isIngredients =
                        child.children[0].getAttribute("id") === "Ingredients";
                    isProcedure =
                        child.children[0].getAttribute("id") === "Procedure";
                } else if (isIngredients && child.matches("ul")) {
                    normalizeNodeList(
                        Array.from(child.querySelectorAll("li"))
                    ).forEach((o) => this._ingredients.push(o));
                } else if (isProcedure && child.matches("ol")) {
                    normalizeNodeList(
                        Array.from(child.querySelectorAll("li"))
                    ).forEach((o) => this._instructions.push(o));
                }
            }
        }
    }

    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector("th", "Time");
        if (ele) {
            return normalizeElement(ele.nextElementSibling);
        }
        return super.total_time();
    }

    yields() {
        const ele = this.querySelector("th", "Servings");
        if (ele) {
            return normalizeElement(ele.nextElementSibling);
        }
        return super.total_time();
    }

    image() {
        const ele = this.querySelector("a.image img");
        return normalizeElement(ele, "src");
    }

    ingredients() {
        return this._ingredients;
    }

    instructions() {
        return this._instructions;
    }
}
