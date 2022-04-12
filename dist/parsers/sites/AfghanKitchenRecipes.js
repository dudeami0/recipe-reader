import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
export class AfghanKitchenRecipes extends ReplacementParser {
    author() {
        const ele = this.querySelector("h5.given-name");
        if (ele) {
            const link = ele.querySelector(`a[rel="author"]`);
            return normalizeElement(ele);
        }
        return super.author();
    }
    total_time() {
        const ele = this.querySelector("li.ready-in");
        if (ele) {
            const span = ele.querySelector("span.value");
            if (span && span.textContent) {
                const [hour, minute] = span.textContent
                    .split(":")
                    .map((str) => parseInt(str));
                return `PT${hour}H${minute}M`;
            }
        }
        return super.total_time();
    }
    yields() {
        const ele = this.querySelector("li.servings");
        if (ele && ele.textContent) {
            return ele.textContent;
        }
        return super.yields();
    }
    ingredients() {
        const eles = this.querySelectorAll("li.ingredient");
        if (eles) {
            return Array.from(eles).map((ele) => ele.textContent || "");
        }
        return super.ingredients();
    }
    instructions() {
        const eles = this.querySelectorAll("p.instructions");
        return normalizeNodeList(eles);
    }
}
//# sourceMappingURL=AfghanKitchenRecipes.js.map