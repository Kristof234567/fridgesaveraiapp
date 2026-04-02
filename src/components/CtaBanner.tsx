import StoreBadges from "@/components/StoreBadges";

const CtaBanner = () => (
  <section className="py-20 md:py-28">
    <div className="container text-center flex flex-col items-center">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Ready to stop wasting food?
      </h2>
      <p className="mt-4 text-muted-foreground max-w-md mx-auto">
        Join the waitlist and be the first to try FridgeSaver AI when it launches.
      </p>
      <div className="mt-8">
        <StoreBadges />
      </div>
    </div>
  </section>
);

export default CtaBanner;
