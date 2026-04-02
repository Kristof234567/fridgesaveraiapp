import { Camera, Clock, ChefHat } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Instant Food Scanning",
    description: "Point your camera at groceries and let AI identify items and log them in seconds.",
  },
  {
    icon: Clock,
    title: "Expiry Date Tracking",
    description: "See what's expiring soon at a glance. Get notified before food goes to waste.",
  },
  {
    icon: ChefHat,
    title: "Magic Recipes",
    description: "AI generates recipes from whatever's left in your fridge — no planning needed.",
  },
];

const WhySection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        Why <span className="text-gradient-primary">FridgeSaver AI</span>?
      </h2>
      <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
        Everything you need to keep your kitchen organized and your wallet happy.
      </p>

      <div className="mt-14 grid gap-8 sm:grid-cols-3">
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
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
