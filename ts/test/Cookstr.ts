// Error: Failed to resolve (Internal Server Error):
// https://www.cookstr.com/Dessert/Blackberry-Ginger-Slump-with-Rosemary-Dumplings

// import assert from "assert";
// import { describe, it } from "mocha";
// import { RecipeSchema } from "../parsers/RecipeSchema.js";
// import { get } from "./utils.js";

// describe("Cookstr", function () {
//     describe("https://www.cookstr.com/Dessert/Blackberry-Ginger-Slump-with-Rosemary-Dumplings", function () {
//         let recipe: RecipeSchema;

//         before(async function () {
//             this.timeout(10000);
//             recipe = await get(
//                 "https://www.cookstr.com/Dessert/Blackberry-Ginger-Slump-with-Rosemary-Dumplings"
//             );
//         });

//         it(`should be authored by "Emily and Matt Clifton"`, function () {
//             assert.equal(recipe.author, "Emily and Matt Clifton");
//         });

//         it(`should be titled "Blackberry-Ginger Slump with Rosemary Dumplings"`, function () {
//             assert.equal(
//                 recipe.title,
//                 "Blackberry-Ginger Slump with Rosemary Dumplings"
//             );
//         });

//         it(`should have the correct ingredients`, function () {
//             assert.deepEqual(recipe.ingredients, [
//                 "FOR THE DUMPLINGS",
//                 "2 cups (250 g) all-purpose flour",
//                 "2 tablespoons (26 g) sugar",
//                 "1/2 teaspoon kosher salt",
//                 "2 teaspoons (8 g) baking powder",
//                 "1/2 teaspoon baking soda",
//                 "5 tablespoons (70 g) very cold unsalted butter",
//                 "1 cup (240 ml) buttermilk, kefir or plain yogurt",
//                 "2 teaspoons (3 g) minced fresh rosemary",
//                 "FOR THE FILLING",
//                 "6 cups (900 g) fresh or frozen blackberries or other berries",
//                 "3 tablespoons (18 g) finely chopped candied ginger",
//                 "1 cup (200 g) sugar (use a little less if your blackberries are unusually sweet)",
//                 "1 teaspoon lemon juice",
//                 "1 teaspoon lemon zest",
//                 "1/2 cup (120 ml) water",
//                 "FOR SERVING",
//                 "1/2 –1 tbsp (7–13 g) turbinado sugar",
//                 "Vanilla ice cream, whipped cream, or clotted cream (optional)",
//             ]);
//         });
//     });
// });
