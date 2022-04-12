import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class MonsieurCuisine extends ReplacementParser {
    author() {
        const ele = this.querySelector("p.recipe_author");
        return normalizeElement(ele);
    }

    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector(
            "div.duration-information div.recipe-duration-total"
        );
        return normalizeElement(ele);
    }

    yields() {
        const ele = this.querySelector("div.recipe--info div.recipe-portions");
        return normalizeElement(ele);
    }

    image() {
        const ele = this.querySelector("div.flexed-image-preview figure img");
        return normalizeElement(ele, "src");
    }

    ingredients() {
        const eles = this.querySelectorAll(
            "div.recipe--ingredients-html-item.col-md-8 li"
        );
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll("div.recipe--instructions li");
        return normalizeNodeList(eles);
    }

    ratings() {
        const eles = this.querySelectorAll("div.recipe--rating span");
        let count = 0;
        let score = 0;
        for (const ele of eles) {
            count++;
            if (ele.matches(".mc-star_filled")) {
                score++;
            } else if (ele.matches(".mc-half_star_thick")) {
                score += 0.5;
            }
        }
        return score / count + " star";
    }
}
