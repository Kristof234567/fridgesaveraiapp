import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container flex flex-col items-center">
          <div className="w-full max-w-md text-center">
            <h1 className="text-3xl font-bold text-foreground">Manage Subscription</h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
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
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 text-base"
                />
                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Send
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ManageSubscription;
