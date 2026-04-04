import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container pt-28 pb-20 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2 text-foreground">Privacy Policy – FridgeSaver AI</h1>
      <p className="text-sm text-muted-foreground mb-10">
        Effective: 4 April 2026 · Last updated: 4 April 2026
      </p>

      <div className="space-y-8 text-muted-foreground leading-relaxed text-[15px]">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction and scope</h2>
          <p>
            This Privacy Policy ("Policy") describes how we collect, use, store, share, and protect personal data when you use the FridgeSaver AI mobile application, any related web interfaces, and the backend systems that operate the service (together, the "Service").
          </p>
          <p className="mt-3">
            By using the Service, you acknowledge that your personal data will be processed as described in this Policy, unless applicable law requires otherwise.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. Data controller</h2>
          <ul className="space-y-1">
            <li><strong className="text-foreground">Data controller:</strong> [Legal name of company or sole trader]</li>
            <li><strong className="text-foreground">Registered address / postal address:</strong> [Full address]</li>
            <li><strong className="text-foreground">Privacy contact email:</strong>{" "}
              <a href="mailto:FridgeSaverAI@protonmail.com" className="text-primary hover:underline">FridgeSaverAI@protonmail.com</a>
            </li>
            <li><strong className="text-foreground">Website:</strong> [if applicable]</li>
          </ul>
          <p className="mt-3">
            Where we use processors (see Section 8), they process data on our instructions and do not become controllers towards you, unless applicable law treats them as independent controllers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. Legal framework</h2>
          <p>
            If you are in the European Economic Area (including Hungary), the General Data Protection Regulation (EU) 2016/679 ("GDPR") and national laws (e.g. Hungarian Act CXII of 2011 on informational self-determination) apply.
          </p>
          <p className="mt-3">
            This Policy explains: what data we process; why and on what legal basis; how long we keep it; who we share it with; your rights; and how to exercise them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. Categories of personal data (overview)</h2>
          <p className="mb-4">Depending on how you use the Service, we may process:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-3 font-semibold text-foreground border-b border-border">Category</th>
                  <th className="text-left p-3 font-semibold text-foreground border-b border-border">Examples (non-exhaustive)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-3 font-medium text-foreground">Account and identity data</td><td className="p-3">Email address, user ID, display name (if provided)</td></tr>
                <tr><td className="p-3 font-medium text-foreground">Authentication data</td><td className="p-3">OAuth-related identifiers and tokens from third-party sign-in (e.g. Google, Apple)</td></tr>
                <tr><td className="p-3 font-medium text-foreground">Inventory and food data</td><td className="p-3">Item names, quantities, estimated values, expiry-related information, categories, optional images or thumbnails</td></tr>
                <tr><td className="p-3 font-medium text-foreground">Image and media data</td><td className="p-3">Photos from camera or gallery uploaded for scanning or inventory</td></tr>
                <tr><td className="p-3 font-medium text-foreground">AI-related technical content</td><td className="p-3">Images and related prompts/metadata sent to AI providers for analysis</td></tr>
                <tr><td className="p-3 font-medium text-foreground">Recipe and usage data</td><td className="p-3">Generated or saved recipes, language preference, usage events linked to your account</td></tr>
                <tr><td className="p-3 font-medium text-foreground">Subscription and billing metadata</td><td className="p-3">Subscription status, plan type, transaction identifiers via payment platforms</td></tr>
                <tr><td className="p-3 font-medium text-foreground">Support and communications</td><td className="p-3">Messages you send us, feedback content, contact email</td></tr>
                <tr><td className="p-3 font-medium text-foreground">Technical and log data</td><td className="p-3">IP address, device/browser characteristics, timestamps, error and access logs</td></tr>
                <tr><td className="p-3 font-medium text-foreground">Push notification data</td><td className="p-3">Device push token (e.g. FCM), notification preferences (if implemented)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">Not every user will have every category; it depends on features used and whether you create an account.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. Purposes and legal bases (GDPR Article 6)</h2>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">5.1. Contract / service delivery (Art. 6(1)(b))</h3>
          <p>Operating your account; inventory features; scanning and image-based analysis; recipe generation and display; cloud sync/storage where applicable; security and reliability of the Service.</p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">5.2. Legitimate interests (Art. 6(1)(f))</h3>
          <p>Fraud prevention; abuse detection; service security; aggregated or pseudonymised analytics and product improvement where your fundamental rights are not overridden.</p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">5.3. Consent (Art. 6(1)(a))</h3>
          <p>Where required by law or by platform rules:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Access to camera or photo library for scanning or uploads</li>
            <li>Push notifications, where not strictly necessary for the core contract</li>
            <li>Optional marketing communications (if introduced)</li>
          </ul>
          <p className="mt-3">You may withdraw consent via device settings and/or in-app controls where available. Withdrawal does not affect lawfulness of processing before withdrawal.</p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">5.4. Legal obligation (Art. 6(1)(c))</h3>
          <p>Compliance with tax, accounting, or regulatory retention requirements; lawful responses to competent authorities.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. Special categories of data</h2>
          <p>The Service is not designed to collect health data. You might voluntarily enter free-text notes (e.g. allergies or dietary conditions). Such content is processed at your own initiative; the appropriate legal basis may be consent or another basis depending on context. We recommend not entering sensitive health information unless you accept that it will be stored and processed as part of the Service.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">7. Automated decision-making and profiling</h2>
          <p>AI features provide suggestions (e.g. food detection, recipes). They do not constitute solely automated decisions with legal or similarly significant effects under GDPR Article 22 in the sense described there, unless we separately inform you and establish a different process. Any profiling beyond basic personalisation will be described transparently if introduced.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">8. Processors and third-party services</h2>
          <p>Non-exhaustive examples (actual list depends on deployment):</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Google Firebase (authentication, database, storage, possibly Firebase Cloud Messaging for push)</li>
            <li>Google (Gemini / GenAI) or other AI providers for image/text processing</li>
            <li>Hosting / infrastructure (e.g. Railway or similar) for APIs and logs</li>
            <li>Payments / subscriptions (e.g. RevenueCat, Google Play Billing)</li>
            <li>Social / OAuth sign-in (Google, Apple) under their respective policies</li>
            <li>Image providers (e.g. Unsplash) where recipe imagery is sourced externally</li>
          </ul>
          <p className="mt-3">We use data processing agreements or equivalent terms with processors where required.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">9. International transfers</h2>
          <p>Some providers may process data outside the EEA (e.g. United States). Where required, we rely on appropriate safeguards such as Standard Contractual Clauses and/or provider documentation (e.g. Google). You may request further information via{" "}
            <a href="mailto:FridgeSaverAI@protonmail.com" className="text-primary hover:underline">FridgeSaverAI@protonmail.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">10. Retention</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-foreground">Account data:</strong> until account deletion, then limited retention in backups if technically necessary.</li>
            <li><strong className="text-foreground">Inventory and recipe data:</strong> until you delete it or delete your account; reasonable technical delay for propagation and backups.</li>
            <li><strong className="text-foreground">Logs:</strong> for security and operations, typically 30–90 days unless longer retention is justified.</li>
            <li><strong className="text-foreground">Legal claims:</strong> data may be retained as required by limitation periods or proceedings.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">11. Your rights (GDPR)</h2>
          <p>You may have the right to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Information (this Policy)</li>
            <li>Access to your personal data</li>
            <li>Rectification of inaccurate data</li>
            <li>Erasure ("right to be forgotten") where applicable</li>
            <li>Restriction of processing in defined cases</li>
            <li>Data portability in a structured, machine-readable format where feasible</li>
            <li>Object to processing based on legitimate interests</li>
            <li>Withdraw consent where processing was consent-based</li>
            <li>Lodge a complaint with a supervisory authority (e.g. in Hungary: NAIH, or the authority in your country of residence)</li>
          </ul>
          <p className="mt-3">
            To exercise your rights, contact:{" "}
            <a href="mailto:FridgeSaverAI@protonmail.com" className="text-primary hover:underline">FridgeSaverAI@protonmail.com</a>.
            We respond within one month (extendable by two further months in complex cases, with notice).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">12. Security</h2>
          <p>We implement technical and organisational measures, including TLS for data in transit where applicable, access controls, logging, and reliance on provider security features. No online service is 100% secure; you are responsible for protecting your credentials and device.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">13. Children</h2>
          <p>The Service is not directed at children under 16 years. If we learn we have collected personal data from a child without a valid basis, we will delete it.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">14. Cookies and web</h2>
          <p>If a web interface uses non-essential cookies or similar technologies, we will provide a cookie notice and choices as required by law. The mobile app may use local storage for technical purposes (e.g. preferences), which is not the same as browser cookies.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">15. Changes</h2>
          <p>We may update this Policy for new features, legal requirements, or processors. We will notify you of material changes by reasonable means (e.g. in-app notice, email, or website). Continued use after notice may constitute acceptance where permitted by law.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">16. Contact</h2>
          <p>
            Privacy and data protection:{" "}
            <a href="mailto:FridgeSaverAI@protonmail.com" className="text-primary hover:underline">FridgeSaverAI@protonmail.com</a>
          </p>
          <p className="mt-1">
            General contact:{" "}
            <a href="mailto:FridgeSaverAI@protonmail.com" className="text-primary hover:underline">FridgeSaverAI@protonmail.com</a>
          </p>
          <p className="mt-3 font-medium text-foreground">
            Official contact email:{" "}
            <a href="mailto:FridgeSaverAI@protonmail.com" className="text-primary hover:underline">FridgeSaverAI@protonmail.com</a>
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default Privacy;
