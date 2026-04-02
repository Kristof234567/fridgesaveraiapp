import { Button } from "@/components/ui/button";
import heroPhone from "@/assets/hero-phone.png";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.fridgesaver.ai";

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
    {/* Glow effect */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

    <div className="container relative flex flex-col items-center gap-12 md:flex-row md:gap-16">
      {/* Copy */}
      <div className="flex-1 text-center md:text-left animate-fade-in-up">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Stop wasting food.
          <br />
          <span className="text-gradient-primary">Start saving money.</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg text-muted-foreground mx-auto md:mx-0">
          Scan your groceries, track expiry dates, and get AI-powered recipes from what's already in your fridge.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
          <Button variant="cta" size="lg" asChild>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              Pre-register on Google Play
            </a>
          </Button>
          <span className="text-sm text-muted-foreground">Free · New on Google Play</span>
        </div>
      </div>

      {/* Phone */}
      <div className="flex-1 flex justify-center animate-float">
        <img
          src={heroPhone}
          alt="FridgeSaver AI app showing food inventory with expiry dates"
          width={400}
          height={400}
          className="w-[280px] sm:w-[340px] md:w-[400px] drop-shadow-2xl"
        />
      </div>
    </div>
  </section>
);

export default Hero;
