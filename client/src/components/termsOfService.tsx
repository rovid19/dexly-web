import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-dark1 text-light1 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-light3 mb-8">
          <span className="text-light2 font-semibold">Effective Date:</span>{" "}
          13.02.2026.
          <br />
          <span className="text-light2 font-semibold">Operator:</span> Roberto
          Vidović, Republic of Croatia
          <br />
          <span className="text-light2 font-semibold">Contact:</span>{" "}
          <a
            href="mailto:roberto.vidovic0@gmail.com"
            className="text-accent1 hover:underline"
          >
            roberto.vidovic0@gmail.com
          </a>
          <br />
          <span className="text-light2 font-semibold">App Name:</span> Dexly
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-light2">
            By downloading, accessing, or using the App, you agree to be bound
            by these Terms. If you do not agree, you must not use the App.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            2. Description of Service
          </h2>
          <p className="text-light2">
            The App allows users to scan physical objects using their device
            camera and receive AI-generated identification and resale-related
            information.
          </p>
          <p className="text-light2">
            The "Sell on Facebook" feature redirects users to Facebook
            Marketplace.
          </p>
          <p className="text-light2">
            The "Sell on eBay" feature is currently marked as "Coming Soon."
            Future updates may integrate listing functionality with eBay.
          </p>
          <p className="text-light2">
            We do not guarantee pricing accuracy, resale value, or successful
            transactions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            3. User Accounts
          </h2>
          <p className="text-light2">
            You may be required to create an account. You are responsible for
            safeguarding login credentials and all activity under your account.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            4. Subscriptions &amp; Payments
          </h2>
          <p className="text-light2">
            Certain features require a paid subscription processed through Apple
            In-App Purchases. Subscriptions renew automatically unless canceled
            through your Apple ID settings.
          </p>
          <p className="text-light2">
            Subscription status is managed via RevenueCat. We do not store or
            process your payment details directly.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            5. User Content
          </h2>
          <p className="text-light2">
            Images captured in the App are stored locally on your device. You
            retain ownership of your content. You are responsible for ensuring
            you have the legal right to scan or list items.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            6. Acceptable Use
          </h2>
          <p className="text-light2 mb-2">You agree not to:</p>
          <ul className="list-disc list-inside text-light2 space-y-1 ml-2">
            <li>Use the App for unlawful purposes</li>
            <li>Attempt reverse engineering</li>
            <li>
              Use the App to list illegal, counterfeit, or restricted goods
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            7. Third-Party Services
          </h2>
          <p className="text-light2">
            The App relies on third-party providers including Supabase for
            backend services and RevenueCat for subscription management. We are
            not responsible for the policies, downtime, or actions of
            third-party platforms including Facebook Marketplace or eBay.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            8. Disclaimer of Warranties
          </h2>
          <p className="text-light2">
            The App is provided "as is" without warranties of any kind.
            AI-generated outputs may be inaccurate, incomplete, or outdated. We
            disclaim liability for financial losses resulting from reliance on
            pricing estimates.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            9. Limitation of Liability
          </h2>
          <p className="text-light2">
            To the maximum extent permitted under Croatian and EU law, we are
            not liable for indirect, incidental, or consequential damages
            arising from use of the App.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            10. Termination
          </h2>
          <p className="text-light2">
            We may suspend or terminate access for violation of these Terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            11. Governing Law
          </h2>
          <p className="text-light2">
            These Terms are governed by the laws of the Republic of Croatia.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-accent1 mb-2">
            12. Changes
          </h2>
          <p className="text-light2">
            We may update these Terms at any time. Continued use of the App
            after updates constitutes acceptance.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
