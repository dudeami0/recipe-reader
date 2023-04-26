import { normalizeElement, normalizeNodeList, ReplacementParser } from "../ReplacementParser.js";
export class IG extends ReplacementParser {
    author() {
        const ele = this.querySelector(".complemento-credito");
        return normalizeElement(ele);
    }
    title() {
        const ele = this.querySelector(`h2[itemprop="name"]`);
        return normalizeElement(ele);
    }
    total_time() {
        const ele = this.querySelector("div.box-info-preparacao span.valor");
        return normalizeElement(ele);
    }
    yields() {
        const ele = this.querySelector("div.box-info-rendimento span.valor");
        return normalizeElement(ele);
    }
    image() {
        const ele = this.querySelector("div.box-img-receita");
        return normalizeElement(ele, "src");
    }
    ingredients() {
        const eles = this.querySelectorAll("ul.lista-ingredientes li");
        return normalizeNodeList(eles);
    }
    instructions() {
        const ele = this.querySelector("div.box-preparo");
        return normalizeElement(ele);
    }
}
//# sourceMappingURL=IG.js.map