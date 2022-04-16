import assert from "assert";
import { describe, it } from "mocha";
import { RecipeSchema } from "../ts/parsers/RecipeSchema.js";
import { get } from "./utils.js";

let recipe: RecipeSchema;

before(async function () {
    this.timeout(10000);
    recipe = await get(
        "https://mykitchen101.com/%e5%88%87%e8%be%be%e8%8a%9d%e5%a3%abcheddar-cheese%e7%89%9b%e6%b2%b9%e8%9b%8b%e7%b3%95/"
    );
});

describe("MyKitchen101", function () {
    describe("https://mykitchen101.com/%e5%88%87%e8%be%be%e8%8a%9d%e5%a3%abcheddar-cheese%e7%89%9b%e6%b2%b9%e8%9b%8b%e7%b3%95/", function () {
        it(`should be authored by "清闲廚房 团队"`, function () {
            assert.equal(recipe.author, "清闲廚房 团队");
        });

        it(`should be titled "切达芝士(Cheddar Cheese)牛油蛋糕"`, function () {
            assert.equal(recipe.title, "切达芝士(Cheddar Cheese)牛油蛋糕");
        });

        it(`should have the correct ingredients`, function () {
            assert.deepEqual(recipe.ingredients, [
                "100 克 切达芝 (cheddar cheese)",
                "60 克 牛奶",
                "250 克 牛油 (有盐, 软化)",
                "30 克 细砂糖",
                "6 个 蛋黄 (size: L)",
                "240 克 低筋面粉",
                "½ 茶匙 泡打粉 (baking powder)"
            ]);
        });

        it(`should have the correct instructions`, function () {
            assert.deepEqual(recipe.instructions, [
                "1 把牛奶和切达芝士混合，放入微波炉(1000W)加热约40秒。取出搅拌至芝士完全溶化。搁置至完全冷却。",
                "2 把8吋(20-cm)方形烤盘抹上油和铺上不沾烤盘纸。",
                "3 在烤炉里加入一盘水(约2 ½杯)，然后把烤炉预热至160°C/320°F。",
                "4 把牛油和糖混合，以中速打至乳白状。慢慢加入蛋黄，搅拌至混合。加入已冷却的溶化芝士，搅拌至混合。",
                "5 把泡打粉加入面粉，过筛后拌匀。分3次把面粉过筛加入，以低速搅拌至混合。",
                "6 以低速把蛋白打至细泡。慢慢加入细砂糖，继续打至干性发泡 (搅拌器拉起蛋白霜会形成直立状)。(温馨提示：蛋白和用来打蛋白的器具里绝对不能有任何油份和水份，包括蛋黄。建议用洗碗剂把蛋的外壳和器具清洗干净后用干净的布抹干。用一个干净的小碗来把蛋黄和蛋白分开，如果蛋黄破裂了，那个蛋白就不要用了。)",
                "7 分4次把蛋白霜加入面糊中，用人工搅拌器轻轻混合。",
                "8 再用刮刀轻轻翻拌至完全混合。",
                "9 把搅拌碗敲击桌面数次以震破大气泡，然后把面糊倒入已准备好的烤盘，用刮刀把表面稍微抹平。把烤盘敲击桌面数次以震破大气泡。",
                "10 放入已预热的烤炉里，以160°C/320°F烘烤50分钟后，再以180°C/355°F烘烤10分钟，或至完全熟透(用木签插入蛋糕中心不粘到面糊即可)。(温馨提示：每个烤炉的温度不一样，建议的时间只供参考，如有需要可以依照各自的烤炉调整烘烤的时间。)",
                "11 脱模后把蛋糕放在铁架上至完全冷却 (离开桌面至少半尺)。"
            ]);
        });
    });
});
