import heroPhone from "@/assets/hero-phone.png";
import StoreBadges from "@/components/StoreBadges";

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
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
          <span className="text-sm text-muted-foreground">Free · Available on Google Play</span>
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
);

export default Hero;
