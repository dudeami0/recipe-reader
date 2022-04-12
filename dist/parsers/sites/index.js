import { AfghanKitchenRecipes } from "./AfghanKitchenRecipes.js";
import { AkisPetretzikis } from "./AkisPetretzikis.js";
import { AllRecipes } from "./AllRecipes.js";
import { AtelierDesChefs } from "./AtelierDesChefs.js";
import { BBCFood } from "./BBCFood.js";
import { BigOven } from "./BigOven.js";
import { ClosetCooking } from "./ClosetCooking.js";
import { ComidinhasDoChef } from "./ComidinhasDoChef.js";
import { CookieAndKate } from "./CookieAndKate.js";
import { CookingLight } from "./CookingLight.js";
import { Cookstr } from "./Cookstr.js";
import { CopyKat } from "./CopyKat.js";
import { CountryLiving } from "./CountryLiving.js";
import { Cucchiaio } from "./Cucchiaio.js";
import { Delish } from "./Delish.js";
import { Dr } from "./Dr.js";
import { EatingWell } from "./EatingWell.js";
import { FineDiningLovers } from "./FineDiningLovers.js";
import { FitMenCook } from "./FitMenCook.js";
import { Food } from "./Food.js";
import { Food52 } from "./Food52.js";
import { FoodRepublic } from "./FoodRepublic.js";
import { ForksOverKnives } from "./ForksOverKnives.js";
import { FranzoesischKochen } from "./FranzoesischKochen.js";
import { FredriksFikaAllas } from "./FredriksFikaAllas.js";
import { GeniusKitchen } from "./GeniusKitchen.js";
import { GreatBritishChefs } from "./GreatBritishChefs.js";
const parsers = {
    "afghankitchenrecipes.com": (h) => new AfghanKitchenRecipes(h),
    "akispetretzikis.com": (h) => new AkisPetretzikis(h),
    "allrecipes.com": (h) => new AllRecipes(h),
    "atelierdeschefs.fr": (h) => new AtelierDesChefs(h),
    "bbc.com": (h) => new BBCFood(h),
    "bbc.co.uk": (h) => new BBCFood(h),
    "bigoven.com": (h) => new BigOven(h),
    "closetcooking.com": (h) => new ClosetCooking(h),
    "comidinhasdochef.com": (h) => new ComidinhasDoChef(h),
    "cookieandkate.com": (h) => new CookieAndKate(h),
    "cookinglight.com": (h) => new CookingLight(h),
    "cookstr.com": (h) => new Cookstr(h),
    "copykat.com": (h) => new CopyKat(h),
    "countryliving.com": (h) => new CountryLiving(h),
    "cucchiaio.it": (h) => new Cucchiaio(h),
    "delish.com": (h) => new Delish(h),
    "dr.dk": (h) => new Dr(h),
    "eatingwell.com": (h) => new EatingWell(h),
    // TODO "recipes.farmhousedeliver.com": (h) => new FarmhouseDelivery(h),
    "finedininglovers.com": (h) => new FineDiningLovers(h),
    "fitmencook.com": (h) => new FitMenCook(h),
    "food.com": (h) => new Food(h),
    "food52.com": (h) => new Food52(h),
    "foodrepublic.com": (h) => new FoodRepublic(h),
    "forksoverknives.com": (h) => new ForksOverKnives(h),
    "franzoesischkochen.de": (h) => new FranzoesischKochen(h),
    "fredriksfika.allas.se": (h) => new FredriksFikaAllas(h),
    "geniuskitchen.com": (h) => new GeniusKitchen(h),
    // TODO "gonnawantseconds.com": (h) => new GonnaWantSeconds(h)
    "greatbritishchefs.com": (h) => new GreatBritishChefs(h)
};
export default function replace(window, orig) {
    const host = window.location.host.toLowerCase();
    for (let domain in parsers) {
        if (host === domain) {
            const parser = parsers[domain](host);
            parser.parse(window, orig);
            orig = parser.get();
            break;
        }
    }
    return orig;
}
//# sourceMappingURL=index.js.map