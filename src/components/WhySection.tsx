import { Camera, Clock, ChefHat, BookOpen } from "lucide-react";
import expiryImg1 from "@/assets/screenshot-expiry-1.jpg";
import expiryImg2 from "@/assets/screenshot-expiry-2.jpg";
import recipeImg1 from "@/assets/screenshot-recipe-1.jpg";
import recipeImg2 from "@/assets/screenshot-recipe-2.jpg";
import { useState } from "react";

const features = [
  {
    icon: Camera,
    title: "Instant Food Scanning",
    description: "Point your camera at groceries and let AI identify items and log them in seconds.",
    hasScanAnimation: true,
  },
  {
    icon: Clock,
    title: "Expiry Date Tracking",
    description: "See what's expiring soon at a glance. Get notified before food goes to waste.",
    screenshots: [expiryImg1, expiryImg2],
  },
  {
    icon: ChefHat,
    title: "Magic Recipes",
    description: "AI generates recipes from whatever's left in your fridge — no planning needed.",
    screenshots: [recipeImg1, recipeImg2],
  },
  {
    icon: BookOpen,
    title: "Your Own Recipes",
    description:
      "Upload your own recipes and keep everything in one place. Save time — no more searching through drawers or old notebooks. Many people write recipes on paper: digitize them for a cleaner, more readable collection, and save trees while you're at it. More trees = more oxygen.",
  },
];

const ScreenshotCarousel = ({ images }: { images: string[] }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="mt-4">
      <div className="rounded-2xl overflow-hidden bg-muted/30">
        <img
          src={images[active]}
          alt="App screenshot"
          className="w-full h-48 object-cover object-top"
          loading="lazy"
        />
      </div>
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const WhySection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        Why Choose <span className="text-gradient-primary">FridgeSaver AI</span>?
      </h2>
      <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
        Everything you need to keep your kitchen organized and your wallet happy.
      </p>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-border bg-card p-8 transition-shadow hover:glow-box"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <f.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            {f.hasScanAnimation && (
              <div className="mt-4 relative rounded-2xl bg-muted/50 h-28 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-2 border-2 border-primary/40 rounded-xl" />
                <div className="absolute inset-2 border-t-2 border-primary animate-scan" />
                <span className="text-xs font-medium text-primary z-10">Scanning...</span>
              </div>
            )}
            {f.screenshots && <ScreenshotCarousel images={f.screenshots} />}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
