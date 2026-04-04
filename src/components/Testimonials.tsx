import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";

const testimonials = [
  {
    name: "Emma Richardson",
    text: "This app literally changed how I shop. I used to throw out half my fridge every week — now almost nothing goes to waste 🙌",
    avatar: avatar1,
  },
  {
    name: "Marcus Jenkins",
    text: "For people that want to stop wasting food @fridgesaverai is the app for you 👀🔥",
    avatar: avatar2,
  },
  {
    name: "Linda Nguyen",
    text: "The recipe suggestions are actually good?? I made dinner from random leftovers and my family loved it. 10/10 would recommend.",
    avatar: avatar3,
  },
  {
    name: "Daniel",
    text: "I started to use it yesterday and im already giving it 5⭐",
    avatar: avatar4,
  },
  {
    name: "Sophie Karlsson",
    text: "I saved over €80 last month just by actually using what I already had. The expiry alerts are a game changer 💚",
    avatar: avatar5,
  },
];

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50/80 to-indigo-50/60">
    <div className="container">
      <h2 className="text-3xl font-bold sm:text-4xl text-center mb-14 text-foreground">
        Thousands of users talk about us
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, 3).map((t) => (
          <div
            key={t.name}
            className="rounded-3xl border border-border bg-background/80 backdrop-blur-sm p-6 transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-10 w-10 rounded-full object-cover"
                loading="lazy"
                width={40}
                height={40}
              />
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
            className="rounded-3xl border border-border bg-background/80 backdrop-blur-sm p-6 transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-10 w-10 rounded-full object-cover"
                loading="lazy"
                width={40}
                height={40}
              />
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
