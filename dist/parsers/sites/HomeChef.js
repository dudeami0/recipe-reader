import { ReplacementParser } from "../ReplacementParser.js";
export class HomeChef extends ReplacementParser {
    instructions() {
        const data = super.instructions();
        return data.map((ele) => {
            return (ele.itemListElement.name +
                "\n\n" +
                ele.itemListElement.description);
        });
    }
}
//# sourceMappingURL=HomeChef.js.map