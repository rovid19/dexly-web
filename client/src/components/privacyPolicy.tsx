const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-dark1 text-light1 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-light3 mb-8">
          <span className="text-light2 font-semibold">Effective Date:</span>{" "}
          13.02.2026.
          <br />
          <span className="text-light2 font-semibold">Controller:</span> Roberto
          Vidović, Croatia
          <br />
          <span className="text-light2 font-semibold">Contact:</span>{" "}
          <a
            href="mailto:roberto.vidovic0@gmail.com"
            className="text-accent1 hover:underline"
          >
            roberto.vidovic0@gmail.com
          </a>
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            1. Data Controller
          </h2>
          <p className="text-light2">
            You are contracting with an individual sole operator based in
            Croatia. For GDPR purposes, I act as the data controller.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            2. Data We Collect
          </h2>
          <p className="text-light2 font-semibold mt-3 mb-1">Account Data</p>
          <ul className="list-disc list-inside text-light2 space-y-1 ml-2">
            <li>Email address</li>
            <li>Authentication identifiers</li>
          </ul>
          <p className="text-light2 font-semibold mt-3 mb-1">Onboarding Data</p>
          <ul className="list-disc list-inside text-light2 space-y-1 ml-2">
            <li>Answers to onboarding questions</li>
          </ul>
          <p className="text-light2 font-semibold mt-3 mb-1">
            Subscription Data
          </p>
          <ul className="list-disc list-inside text-light2 space-y-1 ml-2">
            <li>
              Subscription status and entitlement information via RevenueCat
            </li>
            <li>Apple transaction identifiers (processed via Apple)</li>
          </ul>
          <p className="text-light2 font-semibold mt-3 mb-1">Technical Data</p>
          <ul className="list-disc list-inside text-light2 space-y-1 ml-2">
            <li>
              Basic device identifiers necessary for authentication/session
              handling
            </li>
          </ul>
          <p className="text-light2 font-semibold mt-3 mb-1">Images</p>
          <p className="text-light2">
            Images captured in the App are stored locally on your device using
            Expo File System. Images are not uploaded or stored on our servers
            unless explicitly stated in future updates.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            3. Legal Basis (GDPR Article 6)
          </h2>
          <p className="text-light2 mb-2">Processing is based on:</p>
          <ul className="list-disc list-inside text-light2 space-y-1 ml-2">
            <li>Contract performance (account &amp; subscription access)</li>
            <li>
              Legitimate interest (service improvement &amp; fraud prevention)
            </li>
            <li>Legal obligations (financial compliance)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            4. Third-Party Processors
          </h2>
          <p className="text-light2 mb-2">We use:</p>
          <ul className="list-disc list-inside text-light2 space-y-1 ml-2">
            <li>Supabase (data hosting &amp; authentication)</li>
            <li>RevenueCat (subscription management)</li>
            <li>Apple In-App Purchases (payment processing)</li>
          </ul>
          <p className="text-light2 mt-2">
            Each provider acts as a data processor under their own privacy
            terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            5. Data Retention
          </h2>
          <ul className="list-disc list-inside text-light2 space-y-1 ml-2">
            <li>
              Account &amp; onboarding data: retained while account is active
            </li>
            <li>
              Subscription data: retained as required for accounting/tax
              compliance
            </li>
            <li>
              Deleted accounts: data erased within a reasonable period unless
              legally required to retain
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            6. Data Transfers
          </h2>
          <p className="text-light2">
            Data may be processed outside the EU via service providers. Such
            transfers rely on Standard Contractual Clauses or equivalent
            safeguards where applicable.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            7. Your GDPR Rights
          </h2>
          <p className="text-light2 mb-2">You have the right to:</p>
          <ul className="list-disc list-inside text-light2 space-y-1 ml-2">
            <li>Access your data</li>
            <li>Rectify inaccurate data</li>
            <li>Request erasure</li>
            <li>Restrict processing</li>
            <li>Data portability</li>
            <li>
              Lodge a complaint with the Croatian Data Protection Authority
              (AZOP)
            </li>
          </ul>
          <p className="text-light2 mt-2">
            Requests:{" "}
            <a
              href="mailto:roberto.vidovic0@gmail.com"
              className="text-accent1 hover:underline"
            >
              roberto.vidovic0@gmail.com
            </a>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            8. Children
          </h2>
          <p className="text-light2">
            The App is not intended for children under 16.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            9. Security
          </h2>
          <p className="text-light2">
            Reasonable technical and organizational measures are used to protect
            data. No system is guaranteed fully secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            10. Changes
          </h2>
          <p className="text-light2">
            This Policy may be updated. Continued use of the App constitutes
            acceptance of updates.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
