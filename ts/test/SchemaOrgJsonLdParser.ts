import assert from "assert";
import jsdom from "jsdom";
import { describe, it } from "mocha";
import { isRecipeSchema } from "../parsers/RecipeSchema.js";
import { SchemaOrgJsonLdParser } from "../parsers/SchemaOrgJsonLdParser.js";

const { JSDOM } = jsdom;

describe("SchemaOrgJsonLdParser", function () {
    let results: any;
    before(() => {
        const window = <Window>(<unknown>new JSDOM(`
<html>
    <head>
        <title>JSON-LD Example</title>
    </head>
    <body>
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Recipe",
        "author": "John Smith",
        "cookTime": "PT1H",
        "datePublished": "2009-05-08",
        "description": "This classic banana bread recipe comes from my mom -- the walnuts add a nice texture and flavor to the banana bread.",
        "image": "bananabread.jpg",
        "recipeIngredient": [
            "3 or 4 ripe bananas, smashed",
            "1 egg",
            "3/4 cup of sugar"
        ],
        "interactionStatistic": {
            "@type": "InteractionCounter",
            "interactionType": "https://schema.org/Comment",
            "userInteractionCount": "140"
        },
        "name": "Mom's World Famous Banana Bread",
        "nutrition": {
            "@type": "NutritionInformation",
            "calories": "240 calories",
            "fatContent": "9 grams fat"
        },
        "prepTime": "PT15M",
        "recipeInstructions": "Preheat the oven to 350 degrees. Mix in the ingredients in a bowl. Add the flour last. Pour the mixture into a loaf pan and bake for one hour.",
        "recipeYield": "1 loaf",
        "suitableForDiet": "https://schema.org/LowFatDiet"
    }
    </script>
    <script type="application/ld+json">
    [
        {
            "@context": "https://schema.org",
            "@type": "Recipe",
            "name": "Recipe 2",
            "description": "The second recipe"
        },
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Thomas Thomas"
        },
        {
            "@context": "https://schema.org",
            "@type": "Recipe",
            "name": "Recipe 2",
            "description": "The second recipe"
        }
    ]
    </script>
    </body>
</html>
`).window);

        const parser = new SchemaOrgJsonLdParser(window, "example.com");
        results = parser.parse();
    });
    describe("#parse()", function () {
        it("should return an instance of Array", function () {
            assert.equal(results instanceof Array, true);
        });
        it("should return an Array of 3 elements from test data", function () {
            assert.equal(results.length, 3);
        });
        it("should contain only RecipeSchema", function () {
            assert.equal(results.filter(isRecipeSchema).length, 3);
        });
    });
});
