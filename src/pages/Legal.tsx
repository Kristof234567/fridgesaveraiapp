import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Legal = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container pt-28 pb-20 max-w-3xl">
      <h1 className="text-3xl font-bold mb-10">Privacy Policy & Terms of Use</h1>

      <section className="space-y-4 text-muted-foreground leading-relaxed">
        <h2 className="text-xl font-semibold text-foreground mt-8">Privacy Policy</h2>
        <p>
          FridgeSaver AI ("we", "our", "us") is committed to protecting your privacy.
          This policy explains how we collect, use, and safeguard your information when you use our mobile application.
        </p>
        <h3 className="text-lg font-medium text-foreground">Information We Collect</h3>
        <p>
          We may collect information you provide directly, such as food items you scan and inventory data.
          We do not sell your personal data to third parties.
          We may collect anonymous usage analytics to improve the app experience.
        </p>
        <h3 className="text-lg font-medium text-foreground">Data Storage</h3>
        <p>
          Your data is stored securely and processed to provide you with expiry tracking and recipe suggestions.
          You can request deletion of your data at any time by contacting us.
        </p>
        <h3 className="text-lg font-medium text-foreground">Contact</h3>
        <p>
          For privacy-related questions, contact us at{" "}
          <a href="mailto:contact@fridgesaver.ai" className="text-primary hover:underline">
            contact@fridgesaver.ai
          </a>.
        </p>
      </section>

      <section className="space-y-4 text-muted-foreground leading-relaxed mt-14">
        <h2 className="text-xl font-semibold text-foreground">Terms of Use</h2>
        <p>
          By using FridgeSaver AI, you agree to these terms. The app is provided "as is" without warranties of any kind.
        </p>
        <h3 className="text-lg font-medium text-foreground">Acceptable Use</h3>
        <p>
          You agree to use the app only for its intended purpose — tracking food inventory and generating recipes.
          You may not reverse-engineer, copy, or redistribute any part of the application.
        </p>
        <h3 className="text-lg font-medium text-foreground">Limitation of Liability</h3>
        <p>
          FridgeSaver AI is not responsible for food safety decisions. Always check food quality before consumption,
          regardless of the expiry information shown in the app.
        </p>
        <h3 className="text-lg font-medium text-foreground">Changes</h3>
        <p>
          We reserve the right to update these terms at any time. Continued use of the app after changes constitutes acceptance.
        </p>
      </section>
    </main>
    <Footer />
  </div>
);

export default Legal;
