import { useState } from "react";
import { Camera, TrendingUp, ChefHat, Clock } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const BentoGrid = () => {
  const [saved, setSaved] = useState(0);

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Profit Tracker */}
          <div className="rounded-3xl border border-border bg-card p-8 sm:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Profit Tracker</h3>
              <p className="mt-2 text-sm text-muted-foreground">See how much you save by not wasting food.</p>
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <p className="text-3xl font-bold text-primary">
                +${saved.toFixed(2)} <span className="text-base font-medium text-muted-foreground">Saved</span>
              </p>
              <Slider
                value={[saved]}
                onValueChange={(v) => setSaved(v[0])}
                max={500}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>$0</span>
                <span>$500</span>
              </div>
            </div>
          </div>

          {/* AI Scan */}
          <div className="rounded-3xl border border-border bg-card p-8 relative overflow-hidden">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <Camera className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">AI Food Scanner</h3>
            <p className="mt-2 text-sm text-muted-foreground">Point, scan, done. AI identifies your groceries instantly.</p>
            {/* Scan animation overlay */}
            <div className="mt-4 relative rounded-2xl bg-muted/50 h-32 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-2 border-2 border-primary/40 rounded-xl" />
              <div className="absolute inset-2 border-t-2 border-primary animate-scan" />
              <span className="text-xs font-medium text-primary z-10">Scanning...</span>
            </div>
          </div>

          {/* Expiry Tracking */}
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Expiry Alerts</h3>
            <p className="mt-2 text-sm text-muted-foreground">Get smart notifications before your food expires. Never waste again.</p>
          </div>

          {/* Magic Recipes */}
          <div className="rounded-3xl border border-border bg-card p-8 sm:col-span-2">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <ChefHat className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Magic Recipes</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              AI generates delicious recipes from whatever's left in your fridge — no planning needed. Upload your own recipes too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
