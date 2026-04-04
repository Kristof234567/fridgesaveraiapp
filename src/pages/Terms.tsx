import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container pt-28 pb-20 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2 text-foreground">Terms of Use – FridgeSaver AI</h1>
      <p className="text-sm text-muted-foreground mb-10">
        Effective: 4 April 2026 · Last updated: 4 April 2026
      </p>

      <div className="space-y-8 text-muted-foreground leading-relaxed text-[15px]">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. General provisions</h2>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">1.1. Parties</h3>
          <p>These Terms of Use ("Terms") govern your use of the FridgeSaver AI mobile application and related services (the "Service").</p>
          <ul className="mt-2 space-y-1">
            <li><strong className="text-foreground">Provider / contracting party:</strong> [Legal name – company or sole trader]</li>
            <li><strong className="text-foreground">Registered address:</strong> [Full address]</li>
            <li><strong className="text-foreground">Contact:</strong>{" "}
              <a href="mailto:FridgeSaverAI@protonmail.com" className="text-primary hover:underline">FridgeSaverAI@protonmail.com</a>
            </li>
          </ul>
          <p className="mt-3">The individual or legal entity using the Service is referred to as "User", "you".</p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">1.2. Acceptance</h3>
          <p>By downloading, installing, registering, signing in, or using any feature of the Service, you agree to these Terms and, where separately referenced, the Privacy Policy.</p>
          <p className="mt-2">If you do not agree, do not use the Service.</p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">1.3. Language</h3>
          <p>The official language of these Terms is English. In case of conflict, the English version prevails, to the extent permitted by law.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. Description of the Service</h2>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">2.1. Features (indicative)</h3>
          <p>The Service may include, depending on the current app version and your subscription or trial status:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Recording food and inventory (manually or via image-based input)</li>
            <li>Displaying expiry-related information</li>
            <li>Artificial intelligence-based suggestions (e.g. recognition, recipes)</li>
            <li>Saving and managing recipes within the app (if available)</li>
            <li>Subscription or trial-based features (subject to Google Play or other store rules)</li>
          </ul>
          <p className="mt-3">The Service's content and features may change (updates, new or discontinued functionality).</p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">2.2. Not professional advice</h3>
          <p>The Service—including AI-generated text, recipes, estimated values, and expiry-related information—is not: medical, dietary, or nutritional advice; official food safety guidance; or financial, tax, or legal advice.</p>
          <p className="mt-2">Always verify information on packaging (expiry dates, allergens, storage). Consumption of food is at your own risk.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. Registration, account, security</h2>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">3.1. Account creation</h3>
          <p>Certain features may require registration or third-party sign-in (e.g. Google, Apple). Information you provide must be accurate where required.</p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">3.2. Account security</h3>
          <p>You are responsible for passwords and access to your account. The Provider is not liable for unauthorised access resulting from your negligence.</p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">3.3. Suspension and deletion</h3>
          <p>The Provider may suspend or delete your account if you materially or repeatedly breach these Terms, or if required by law or competent authority.</p>
          <p className="mt-2">You may request deletion of your account as described in the Privacy Policy and in-app options, where available.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. Acceptable use</h2>
          <p>You agree to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Use the Service lawfully and in accordance with these Terms</li>
            <li>Not misuse the Service for harassment, illegal content, or harm to others</li>
            <li>Not attempt to circumvent security, hack, overload, or disrupt the Service (including abusive automated access)</li>
            <li>Not upload content that infringes third-party rights (e.g. photos of identifiable persons without consent, unauthorised copyrighted material)</li>
          </ul>
          <p className="mt-3">The Provider may remove content and restrict access where misuse is suspected.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. User content and licence</h2>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">5.1. Your content</h3>
          <p>You retain your rights in content you upload or submit (images, text, inventory data) ("User Content"), subject to the licence below.</p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">5.2. Licence to the Provider</h3>
          <p>You grant the Provider a non-exclusive, worldwide, revocable licence to host, store, process, display, and technically reproduce User Content as needed to operate, secure, and improve the Service, and for limited aggregated or anonymised analytics that does not identify you, unless separate consent is required by law.</p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">5.3. Your representations</h3>
          <p>You represent that your User Content does not violate third-party rights and that you have the right to upload it.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. Artificial intelligence (AI)</h2>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">6.1. Nature and limitations</h3>
          <p>AI features rely on probabilistic models; they may be wrong (misrecognition, unsuitable recipes). We do not warrant accuracy or fitness for your individual situation (allergies, health conditions, religious diet, etc.).</p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">6.2. No liability for AI output</h3>
          <p>To the extent permitted by mandatory law, the Provider is not liable for direct or indirect consequences of AI-generated content (e.g. illness, allergic reaction, financial loss where relevant), except where liability cannot be excluded under applicable law.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">7. Subscriptions, fees, payment (Google Play)</h2>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">7.1. Platform terms</h3>
          <p>If you purchase a subscription through Google Play (or another store), the store's terms also apply to payment and billing. These Terms do not replace store terms.</p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">7.2. Pricing and changes</h3>
          <p>Prices are as shown in the app or store. The Provider may change prices for new billing periods in line with store rules.</p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">7.3. Cancellation and refunds</h3>
          <p>Cancellation and refunds are primarily governed by Google Play / the platform and applicable consumer law. See your store account and help centre for details.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">8. Intellectual property</h2>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">8.1. Provider materials</h3>
          <p>The app, design, branding, documentation, and related materials are the intellectual property of the Provider or its licensors. You may not copy, modify, reverse engineer, or exploit them beyond what mandatory law allows.</p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">8.2. Third parties</h3>
          <p>The Service may include third-party components, images (e.g. stock / Unsplash), and SDKs; their licences and terms apply.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">9. Changes, suspension, and termination of the Service</h2>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">9.1. Changes</h3>
          <p>The Provider may modify the Service (add, change, or remove features). Material adverse changes may require notice where mandatory law so requires.</p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">9.2. Discontinuation</h3>
          <p>The Provider may discontinue the whole or part of the Service. Where feasible, reasonable advance notice will be given, unless immediate termination is required (law, security).</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">10. Limitation of liability</h2>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">10.1. "As is"</h3>
          <p>The Service is provided "as is" and "as available". We do not warrant uninterrupted or error-free operation, except as required by mandatory law.</p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">10.2. Indirect damages</h3>
          <p>To the maximum extent permitted by mandatory law, the Provider is not liable for indirect, consequential, or lost profit claims (including data loss), except where liability cannot be excluded (e.g. intent, gross negligence).</p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">10.3. Cap on liability</h3>
          <p>Where liability cannot be excluded and is established, the Provider's aggregate liability may be limited to the amount you paid for the Service in the 12 months before the claim.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">11. Mandatory law and consumers</h2>
          <p>If you are a consumer under applicable law, unfair clauses may be void; mandatory consumer protection rules take precedence.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">12. Dispute resolution and governing law</h2>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">12.1. Governing law</h3>
          <p>These Terms are governed by the laws of Hungary, without prejudice to mandatory EU consumer protections.</p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">12.2. Jurisdiction</h3>
          <p>Disputes shall be brought before the courts of Hungary, unless mandatory law provides otherwise.</p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">12.3. EU online dispute resolution</h3>
          <p>
            If you are an EU consumer, you may use the European Commission's ODR platform:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">13. Contact</h2>
          <p>
            Email:{" "}
            <a href="mailto:FridgeSaverAI@protonmail.com" className="text-primary hover:underline">FridgeSaverAI@protonmail.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">14. Final provisions</h2>
          <p>If any provision is invalid in part, the remainder remains in effect. Failure to enforce a right does not waive that right.</p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default Terms;
