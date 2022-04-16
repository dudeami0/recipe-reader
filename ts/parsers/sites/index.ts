import { RecipeSchema } from "../RecipeSchema.js";
import { ReplacementParser } from "../ReplacementParser.js";
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
import { GreatBritishChefs } from "./GreatBritishChefs.js";
import { HEB } from "./HEB.js";
import { HomeChef } from "./HomeChef.js";
import { HundredAndOneCookbooks } from "./HundredAndOneCookbooks.js";
import { Inspiralized } from "./Inspiralized.js";
import { JamieOliver } from "./JamieOliver.js";
import { Joyfoodsunshine } from "./Joyfoodsunshine.js";
import { JustBento } from "./JustBento.js";
import { KennyMcGovern } from "./KennyMcGovern.js";
import { KingArthur } from "./KingArthur.js";
import { KuchniaDomowa } from "./KuchniaDomowa.js";
import { KwestiaSmaku } from "./KwestiaSmaku.js";
import { LAtelierDeRoxane } from "./LAtelierDeRoxane.js";
import { LekkerEnSimpel } from "./LekkerEnSimpel.js";
import { MarthaStewart } from "./MarthaStewart.js";
import { Matprat } from "./Matprat.js";
import { Mindmegette } from "./Mindmegette.js";
import { MomsWithCrockPots } from "./MomsWithCrockPots.js";
import { MonsieurCuisine } from "./MonsieurCuisine.js";
import { MotherThyme } from "./MotherThyme.js";
import { MyBakingAddiction } from "./MyBakingAddiction.js";
import { MyKitchen101 } from "./MyKitchen101.js";
import { MyKitchen101en } from "./MyKitchen101en.js";
import { NIHHealthyEating } from "./NIHHealthyEating.js";
import { Panelinha } from "./Panelinha.js";
import { PaniniHappy } from "./PaniniHappy.js";
import { PopSugar } from "./PopSugar.js";
import { Przepisy } from "./Przepisy.js";
import { RachlMansfield } from "./RachlMansfield.js";
import { RealSimple } from "./RealSimple.js";
import { Rezeptwelt } from "./Rezeptwelt.js";
import { SallysBlog } from "./SallysBlog.js";
import { Saveur } from "./Saveur.js";
import { SeriousEats } from "./SeriousEats.js";
import { SimplyQuinoa } from "./SimplyQuinoa.js";
import { SimplyRecipes } from "./SimplyRecipes.js";
import { SouthernLiving } from "./SouthernLiving.js";
import { SteamyKitchen } from "./SteamyKitchen.js";
import { StreetKitchen } from "./StreetKitchen.js";
import { SunBasket } from "./SunBasket.js";
import { SundPaaBudget } from "./SundPaaBudget.js";
import { SweetPeasAndSaffron } from "./SweetPeasAndSaffron.js";
import { TasteOfHome } from "./TasteOfHome.js";
import { TastesOfLizzyT } from "./TastesOfLizzyT.js";
import { TastyKitchen } from "./TastyKitchen.js";
import { TheHappyFoodie } from "./TheHappyFoodie.js";
import { TheKitchn } from "./TheKitchn.js";
import { ThePioneerWoman } from "./ThePioneerWoman.js";
import { TheSpruceEats } from "./TheSpruceEats.js";
import { TheVintageMixer } from "./TheVintageMixer.js";
import { TimesOfIndia } from "./TimesOfIndia.js";
import { TineNo } from "./TineNo.js";
import { TudoGostoso } from "./TudoGostoso.js";
import { TwoPeasAndTheirPod } from "./TwoPeasAndTheirPod.js";
import { USDAMyPlate } from "./USDAMyPlate.js";
import { Valdemarsro } from "./Valdemarsro.js";
import { Vegolosi } from "./Vegolosi.js";
import { WhatsGabyCooking } from "./WhatsGabyCooking.js";
import { WikiCookbook } from "./WikiCookbook.js";
import { Woop } from "./Woop.js";
import { Yummly } from "./Yummly.js";
import { ZeitWochenmarkt } from "./ZeitWochenmarkt.js";

interface Constructor {
    (host: string): ReplacementParser;
}

export const parsers: { [key: string]: Constructor | undefined } = {
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
    // TODO (broken) "recipes.farmhousedeliver.com": (h) => new FarmhouseDelivery(h),
    "finedininglovers.com": (h) => new FineDiningLovers(h),
    "fitmencook.com": (h) => new FitMenCook(h),
    "food.com": (h) => new Food(h),
    "food52.com": (h) => new Food52(h),
    "foodrepublic.com": (h) => new FoodRepublic(h),
    "forksoverknives.com": (h) => new ForksOverKnives(h),
    "franzoesischkochen.de": (h) => new FranzoesischKochen(h),
    // (broken) "fredriksfika.allas.se": (h) => new FredriksFikaAllas(h),
    // (deprecated) "geniuskitchen.com": (h) => new GeniusKitchen(h),
    // (broken) "gonnawantseconds.com": (h) => new GonnaWantSeconds(h)
    "greatbritishchefs.com": (h) => new GreatBritishChefs(h),
    // (async) "gousto.co.uk": (h) => new GoustoJson(h),
    "heb.com": (h) => new HEB(h),
    // (broken) "heinzbrasil.com.br": (h) => new HeinzBrasil(h),
    "homechef.com": (h) => new HomeChef(h),
    "101cookbooks.com": (h) => new HundredAndOneCookbooks(h),
    // (broken) "receitas.ig.com.br": (h) => new IG(h),
    "inspiralized.com": (h) => new Inspiralized(h),
    "jamieoliver.com": (h) => new JamieOliver(h),
    "joyfoodsunshine.com": (h) => new Joyfoodsunshine(h),
    "justbento.com": (h) => new JustBento(h),
    "kennymcgovern.com": (h) => new KennyMcGovern(h),
    "kingarthurbaking.com": (h) => new KingArthur(h),
    // (async) "mobile.kptncook.com": (h) => new KptnCook(h),
    "kuchnia-domowa.pl": (h) => new KuchniaDomowa(h),
    "kwestiasmaku.com": (h) => new KwestiaSmaku(h),
    "latelierderoxane.com": (h) => new LAtelierDeRoxane(h),
    "lekkerensimpel.com": (h) => new LekkerEnSimpel(h),
    "marthastewart.com": (h) => new MarthaStewart(h),
    "matprat.no": (h) => new Matprat(h),
    "mindmegette.hu": (h) => new Mindmegette(h),
    "momswithcrockpots.com": (h) => new MomsWithCrockPots(h),
    "monsieur-cuisine.com": (h) => new MonsieurCuisine(h),
    "motherthyme.com": (h) => new MotherThyme(h),
    "mybakingaddiction.com": (h) => new MyBakingAddiction(h),
    "mykitchen101.com": (h) => new MyKitchen101(h),
    "mykitchen101en.com": (h) => new MyKitchen101en(h),
    "healthyeating.nhlbi.nih.gov": (h) => new NIHHealthyEating(h),
    // (broken) "nutritionbynathalie.com": (h) => new NutritionByNathalie(h)
    "panelinha.com.br": (h) => new Panelinha(h),
    "paninihappy.com": (h) => new PaniniHappy(h),
    "popsugar.com": (h) => new PopSugar(h),
    "przepisy.pl": (h) => new Przepisy(h),
    "rachlmansfield.com": (h) => new RachlMansfield(h),
    "realsimple.com": (h) => new RealSimple(h),
    "rezeptwelt.de": (h) => new Rezeptwelt(h),
    "sallys-blog.de": (h) => new SallysBlog(h),
    "saveur.com": (h) => new Saveur(h),
    "seriouseats.com": (h) => new SeriousEats(h),
    "simplyquinoa.com": (h) => new SimplyQuinoa(h),
    "simplyrecipes.com": (h) => new SimplyRecipes(h),
    "southernliving.com": (h) => new SouthernLiving(h),
    "steamykitchen.com": (h) => new SteamyKitchen(h),
    "streetkitchen.hu": (h) => new StreetKitchen(h),
    "sunbasket.com": (h) => new SunBasket(h),
    "sundpaabudget.dk": (h) => new SundPaaBudget(h),
    "sweetpeasandsaffron.com": (h) => new SweetPeasAndSaffron(h),
    "tasteofhome.com": (h) => new TasteOfHome(h),
    "tastesoflizzyt.com": (h) => new TastesOfLizzyT(h),
    "tastykitchen.com": (h) => new TastyKitchen(h),
    "thehappyfoodie.co.uk": (h) => new TheHappyFoodie(h),
    "thekitchn.com": (h) => new TheKitchn(h),
    "thepioneerwoman.com": (h) => new ThePioneerWoman(h),
    "thespruceeats.com": (h) => new TheSpruceEats(h),
    "thevintagemixer.com": (h) => new TheVintageMixer(h),
    "recipes.timesofindia.com": (h) => new TimesOfIndia(h),
    "tine.no": (h) => new TineNo(h),
    "tudogostoso.com.br": (h) => new TudoGostoso(h),
    "twopeasandtheirpod.com": (h) => new TwoPeasAndTheirPod(h),
    "myplate.gov": (h) => new USDAMyPlate(h),
    "valdemarsro.dk": (h) => new Valdemarsro(h),
    "vegolosi.it": (h) => new Vegolosi(h),
    "whatsgabycooking.com": (h) => new WhatsGabyCooking(h),
    "en.wikibooks.org": (h) => new WikiCookbook(h),
    // (async) "woolworths.com.au": (h) => new Woolworths(h),
    "woop.co.nz": (h) => new Woop(h),
    "yummly.com": (h) => new Yummly(h),
    "zeit.de": (h) => new ZeitWochenmarkt(h)
};

export default function replace(window: Window, orig: RecipeSchema) {
    const host = window.location.host.toLowerCase();
    for (let domain in parsers) {
        if (host === domain) {
            const factory = parsers[domain];
            if (factory) {
                const parser = factory(host);
                parser.parse(window, orig);
                orig = parser.get();
            }
            break;
        }
    }
    return orig;
}
