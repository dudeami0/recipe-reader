import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement, normalizeNodeList } from "../utils.js";

export class FitMenCook extends ReplacementParser {
    author() {
        const ele = this.querySelector(".fmc_autor_top_name p");
        return normalizeElement(ele);
    }

    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }

    prep_time() {
        const ele = this.querySelector(".fmc_prep .fmc_prep");
        return normalizeElement(ele);
    }

    cook_time() {
        const ele = this.querySelector(".fmc_prep .fmc_cook");
        return normalizeElement(ele);
    }

    total_time() {
        const ele = this.querySelector(".fmc_prep .fmc_total");
        return normalizeElement(ele);
    }

    ingredients() {
        const eles = this.querySelectorAll(".fmc_ingredients li");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll(".fmc_steps .fmc_step_content");
        return normalizeNodeList(eles);
    }
}
