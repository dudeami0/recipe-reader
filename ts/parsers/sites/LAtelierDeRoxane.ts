import {
    normalizeElement,
    normalizeNodeList,
    ReplacementParser
} from "../ReplacementParser.js";

export class LAtelierDeRoxane extends ReplacementParser {
    private blocs: Element[] = [];
    before_parse() {
        this.blocs = this.querySelectorAll(
            "div.bloc_temps.bloc_blog div.infos span.valeur"
        );
    }

    image() {
        const ele = this.querySelector(
            "img.attachment-single.size-single.wp-post-image"
        );
        return normalizeElement(ele, "src");
    }

    title() {
        const ele = this.querySelector("div.bloc_titreh1.bloc_blog h1");
        return normalizeElement(ele);
    }

    description() {
        const ele = this.querySelector("div.bloc_chapeau.bloc_blog");
        return normalizeElement(ele);
    }

    total_time() {
        return normalizeElement(this.blocs[0]);
    }

    prep_time() {
        return normalizeElement(this.blocs[1]);
    }

    cook_time() {
        return normalizeElement(this.blocs[2]);
    }

    yields() {
        return normalizeElement(this.blocs[4]);
    }

    ingredients() {
        const eles = this.querySelectorAll("div.ingredient");
        return normalizeNodeList(eles);
    }

    instructions() {
        const eles = this.querySelectorAll(
            "div.bloc_texte_simple.bloc_blog li"
        );
        return normalizeNodeList(eles);
    }
}
