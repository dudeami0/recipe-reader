import { ReplacementParser } from "../ReplacementParser.js";

export class HomeChef extends ReplacementParser {
    instructions() {
        const data = <any>super.instructions();
        return data.map((ele: any) => {
            return (
                ele.itemListElement.name +
                "\n\n" +
                ele.itemListElement.description
            );
        });
    }
}
