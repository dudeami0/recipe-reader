import { ReplacementParser } from "../ReplacementParser.js";
import { normalizeElement } from "../utils.js";

export class AkisPetretzikis extends ReplacementParser {
    private json: any = {};
    private locale: string = "unknown";
    before_parse() {
        const tmp = JSON.parse(
            normalizeElement(this.querySelector("#__NEXT_DATA__")) || "{}"
        );
        if (tmp) {
            this.json = tmp.props.pageProps.ssRecipe.data;
            this.locale = tmp.locale;
        }
    }

    total_time() {
        const make = this.json.make_time;
        const bake = this.json.bake_time;
        return make + bake;
    }

    yields() {
        return this.json.shares;
    }

    ingredients() {
        const sections = this.json.ingredient_sections;
        return (sections ? sections[0].ingredients : []).map(
            (ingredient: any) => {
                const parts = [];
                if (ingredient.quantity) {
                    parts.push(ingredient.quantity);
                }
                if (ingredient.unit) {
                    parts.push(ingredient.unit);
                }
                if (ingredient.title) {
                    parts.push(ingredient.title);
                }
                return parts.join(" ");
            }
        );
    }

    instructions() {
        const sections = this.json.method;
        return (sections ? sections[0].method : []).map((method: string) => {
            return method.trim();
        });
    }

    ratings() {
        return parseFloat(this.json.average_score).toFixed(2);
    }

    language() {
        return this.locale;
    }
}
