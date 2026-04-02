import { Button } from "@/components/ui/button";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.fridgesaver.ai";

const CtaBanner = () => (
  <section className="py-20 md:py-28">
    <div className="container text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Ready to stop wasting food?
      </h2>
      <p className="mt-4 text-muted-foreground max-w-md mx-auto">
        Join the waitlist and be the first to try FridgeSaver AI when it launches.
      </p>
      <div className="mt-8">
        <Button variant="cta" size="lg" asChild>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
            Pre-register on Google Play
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default CtaBanner;
