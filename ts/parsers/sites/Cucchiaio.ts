import { normalizeElement, ReplacementParser } from "../ReplacementParser.js";

export class Cucchiaio extends ReplacementParser {
    total_time() {
        const eles = this.querySelectorAll("div.scheda-ricetta-new tr");
        let total = 0;
        for (const ele of eles) {
            total += parseInt(ele.textContent || "0");
        }
        return `PT${total}M`;
    }

    yields() {
        const eles = this.querySelectorAll("td");
        let found = false;
        for (const ele of eles) {
            if (ele.textContent === "PORZIONI") {
                found = true;
            }
            if (found) {
                return ele.textContent || "";
            }
        }
        return super.yields();
    }

    image() {
        const ele = this.querySelector("div.auto img.image");
        return normalizeElement(ele, "src");
    }
}
