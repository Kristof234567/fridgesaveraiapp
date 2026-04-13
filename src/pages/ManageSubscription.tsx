import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ManageSubscription = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    /* A flex-col és a min-h-screen kombinációja kell ide */
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* A flex-grow kényszeríti a főrészt, hogy kitöltse a helyet, így a Footer az aljára tapad */}
      <main className="pt-32 pb-20 flex-grow">
        <div className="container flex flex-col items-center">
          <div className="w-full max-w-md text-center">
            <h1 className="text-2xl font-bold text-foreground">Manage Subscription</h1>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              If you purchased your subscription on the web, please enter the email address you subscribed with in order to change your subscription.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl border border-border bg-card p-6">
                <p className="text-foreground font-medium">✓ Request sent!</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  If an account exists for <strong>{email}</strong>, you'll receive an email with instructions to manage your subscription.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 text-left">
                <Label htmlFor="email" className="text-sm font-medium text-primary">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 text-base rounded-lg border-border"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full mt-2 bg-foreground text-background hover:bg-foreground/90 rounded-full font-semibold"
                >
                  Send
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Így a Footer alatt garantáltan nem lesz semmi, mert ez az utolsó elem a képernyőn */}
      <Footer />
    </div>
  );
};

export default ManageSubscription;
