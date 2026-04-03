const testimonials = [
  {
    name: "pree.palmer",
    text: "im ngl I've saved so much money with it, doesn't need to be exact it's pretty decent",
    avatar: "PP",
    bgColor: "bg-red-100 text-red-600",
  },
  {
    name: "Ordinary Tony",
    text: "IVE BEEN TRACKING MY FOOD WASTE FOR A YEAR STRAIGHT W APP FR 👏👏👏",
    avatar: "OT",
    bgColor: "bg-amber-100 text-amber-700",
  },
  {
    name: "greenkitchen2025",
    text: "I love your app it helps me keep track of my food without overthinking everything and gives me smart recipes plus it's so aesthetic 💖",
    avatar: "GK",
    bgColor: "bg-pink-100 text-pink-600",
  },
  {
    name: "Mathias",
    text: "I started to use it yesterday and im already giving it 5⭐",
    avatar: "M",
    bgColor: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "Ms Nsofor",
    text: "For people that want to stop wasting food @fridgesaverai is the app for you 👀🔥",
    avatar: "D",
    bgColor: "bg-orange-100 text-orange-600",
  },
];

const Testimonials = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <h2 className="text-3xl font-bold sm:text-4xl text-center mb-14">
        Thousands of users talk about us
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, 3).map((t) => (
          <div
            key={t.name}
            className="rounded-3xl border border-border bg-card p-6 transition-shadow hover:glow-box"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${t.bgColor}`}>
                {t.avatar}
              </div>
              <p className="text-sm font-bold text-foreground">{t.name}</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 max-w-3xl mx-auto">
        {testimonials.slice(3).map((t) => (
          <div
            key={t.name}
            className="rounded-3xl border border-border bg-card p-6 transition-shadow hover:glow-box"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${t.bgColor}`}>
                {t.avatar}
              </div>
              <p className="text-sm font-bold text-foreground">{t.name}</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
