import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
export class USDAMyPlate extends ReplacementParser {
    title() {
        const ele = this.querySelector("h1");
        return normalizeElement(ele);
    }
    total_time() {
        const eles = this.querySelectorAll("div.mp-recipe-full__overview.desktop:grid-col-5.grid-row " +
            "span.mp-recipe-full__detail--data");
        return normalizeNodeList(eles).join(" ");
    }
    yields() {
        const ele = this.querySelector("div.mp-recipe-full__overview.desktop:grid-col-5.grid-row span", "Makes:");
        if (ele) {
            return normalizeElement(ele.nextElementSibling);
        }
        return super.yields();
    }
    image() {
        const ele = this.querySelector("div.field.field--name-field-recipe-image" +
            ".field--type-image.field--label-visually_hidden " +
            "img");
        return normalizeElement(ele, "src");
    }
    ingredients() {
        const eles = this.querySelectorAll("ul.field_items.ingredients.yyyyy li");
        return normalizeNodeList(eles);
    }
    instructions() {
        const ele = this.querySelector("div.clearfix.text-formatted.field.field--name-field-instructions" +
            ".field--type-text-long.field--label-above " +
            "div.field__item");
        return normalizeElement(ele);
    }
}
//# sourceMappingURL=USDAMyPlate.js.map