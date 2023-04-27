import { ReplacementParser } from "../ReplacementParser.js";

export class MyKitchen101 extends ReplacementParser {
    // private _instructions: string[] = [];
    // before_parse() {
    //     const ele = this.querySelector(".entry-content");
    //     if (ele && ele.children) {
    //         const children = Array.from(ele.children) || [];
    //         let stage = 0;
    //         for (const child of children) {
    //             if (!child.textContent) {
    //                 continue;
    //             }
    //             if (stage > 0 && child.matches("p")) {
    //                 this._instructions.push(child.textContent || "");
    //             }
    //             if (child.textContent.indexOf("做法：") !== -1) {
    //                 stage++;
    //             }
    //         }
    //     }
    // }
    // author() {
    //     const ele = this.querySelector(`a[rel="author"]`);
    //     return normalizeElement(ele);
    // }
    // title() {
    //     const ele = this.querySelector("h1.entry-title");
    //     return normalizeElement(ele);
    // }
    // yields() {
    //     const ele = this.querySelector("p", "分量：");
    //     return normalizeElement(ele);
    // }
    // ingredients() {
    //     const ele = this.querySelector("p", "材料：");
    //     if (ele && ele.nextElementSibling) {
    //         const eles = Array.from(
    //             ele.nextElementSibling.querySelectorAll("li")
    //         );
    //         return normalizeNodeList(eles);
    //     }
    //     return super.ingredients();
    // }
    // instructions() {
    //     return this._instructions;
    // }
}
