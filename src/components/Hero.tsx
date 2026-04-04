import heroPhone from "@/assets/hero-phone.png";
import StoreBadges from "@/components/StoreBadges";

const Hero = () => (
  <>
    {/* Meet FridgeSaver AI intro */}
    <section className="pt-28 pb-8 md:pt-36 md:pb-12 text-center">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
          Meet FridgeSaver AI
        </h2>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          FridgeSaver AI lets you log what's in your fridge or pantry — by photo or manually — track expiry dates, and get AI-generated recipes from what you already have. Less food goes to waste, your stock stays clear, and you save time and money on cooking and shopping decisions.
        </p>
      </div>
    </section>

    {/* Hero */}
    <section className="relative pb-20 md:pb-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.07] blur-[120px] pointer-events-none" />

      <div className="container relative flex flex-col items-center gap-12 md:flex-row md:gap-16">
        <div className="flex-1 text-center md:text-left animate-fade-in-up">
          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Stop throwing money
            <br />
            <span className="text-gradient-primary">in the trash.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground mx-auto md:mx-0">
            Save $325+ every month by tracking your food waste with AI.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 md:items-start">
            <StoreBadges />
          </div>
        </div>

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
  </>
);

export default Hero;
