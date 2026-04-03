import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    username: "@johndoe",
    text: "Saved $120 in my first month. The AI scan is pure magic.",
    avatar: "JD",
  },
  {
    name: "Sarah Smith",
    username: "@sarah_smith",
    text: "Finally, I don't have to guess what's rotting in my fridge.",
    avatar: "SS",
  },
  {
    name: "Mike Finance",
    username: "@mike_finance",
    text: "The profit tracker is so addictive. It's like a game for my wallet.",
    avatar: "MF",
  },
];

const Testimonials = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="flex flex-col items-center gap-6">
        {/* Rating badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < 5 ? "fill-primary text-primary" : "text-muted-foreground"}`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">4.9 / 5</span>
        </div>

        <h2 className="text-3xl font-bold sm:text-4xl text-center">
          What our users say
        </h2>
      </div>

      {/* Masonry grid */}
      <div className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {testimonials.map((t) => (
          <div
            key={t.username}
            className="break-inside-avoid rounded-3xl border border-border bg-card p-6 transition-shadow hover:glow-box"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {t.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.username}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
