import { Button } from "@/components/ui/button";
import featureImg from "@/assets/feature-recipes.png";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.fridgesaver.ai";

const FeatureSpotlight = () => (
  <section className="py-20 md:py-28 bg-card/50">
    <div className="container flex flex-col items-center gap-12 md:flex-row md:gap-16">
      <div className="flex-1 flex justify-center">
        <img
          src={featureImg}
          alt="FridgeSaver AI Magic Recipes feature"
          width={400}
          height={400}
          loading="lazy"
          className="w-[260px] sm:w-[320px] md:w-[380px] drop-shadow-2xl"
        />
      </div>

      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Recipes that use <span className="text-gradient-primary">what you already have</span>
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0">
          No more Googling "what to cook with broccoli and eggs." FridgeSaver AI reads your inventory and generates personalised, step-by-step recipes so nothing goes to waste.
        </p>
        <div className="mt-8">
          <Button variant="cta" size="lg" asChild>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              Pre-register on Google Play
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSpotlight;
