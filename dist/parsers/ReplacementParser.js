export function normalizeNodeList(list) {
    return list.map((ele) => normalizeElement(ele));
}
export function normalizeElement(ele, attr = false) {
    if (ele) {
        if (attr) {
            return normalizeString(ele.getAttribute(attr));
        }
        return normalizeString(ele.textContent);
    }
    return "";
}
export function normalizeString(str) {
    return (String(str) || "").trim();
}
export class ReplacementParser {
    constructor(host) {
        this.host = host.toLowerCase();
    }
    parse(window, orig) {
        this.window = window;
        this.data = Object.assign({}, orig);
    }
    before_parse() { }
    get() {
        this.before_parse();
        return {
            host: this.host,
            author: this.author(),
            title: this.title(),
            category: this.category(),
            total_time: this.total_time(),
            yields: this.yields(),
            image: this.image(),
            ingredients: this.ingredients(),
            instructions: this.instructions(),
            ratings: this.ratings(),
            cuisine: this.cuisine(),
            description: this.description()
        };
    }
    getWindow() {
        return this.window;
    }
    querySelector(query, text) {
        if (this.window) {
            if (text) {
                const results = Array.from(this.window.document.querySelectorAll(query));
                const result = results.filter((result) => result.textContent &&
                    result.textContent.indexOf(text) !== -1)[0];
                return result || null;
            }
            else {
                return this.window.document.querySelector(query);
            }
        }
        return null;
    }
    querySelectorAll(query, text) {
        if (this.window) {
            const results = Array.from(this.window?.document.querySelectorAll(query));
            if (text) {
                return results.filter((ele) => ele.textContent && ele.textContent.indexOf(text) !== -1);
            }
            else {
                return results;
            }
        }
        return [];
    }
    hasHost(host) {
        return host.toLowerCase().indexOf(this.host) !== -1;
    }
    author() {
        return this.data.author;
    }
    title() {
        return this.data.title;
    }
    category() {
        return this.data.category;
    }
    prep_time() {
        return "0m";
    }
    cook_time() {
        return "0m";
    }
    calc_total_time() {
        // TODO Parse time from string and reconstruct properly, lib for this?
        this.data.total_time = this.prep_time() + " + " + this.cook_time();
        return this.data.total_time;
    }
    total_time() {
        return this.data.total_time;
    }
    yields() {
        return this.data.yields;
    }
    image() {
        return this.data.image;
    }
    ingredients() {
        return this.data.ingredients;
    }
    instructions() {
        return this.data.instructions;
    }
    ratings() {
        return this.data.ratings;
    }
    cuisine() {
        return this.data.cuisine;
    }
    description() {
        return this.data.description;
    }
}
//# sourceMappingURL=ReplacementParser.js.map