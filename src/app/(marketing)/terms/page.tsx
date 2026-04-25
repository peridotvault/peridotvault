import { createMetadata } from "@/features/seo";

export const metadata = createMetadata({
  title: "Terms and Conditions",
  description:
    "Read the terms and conditions for using PeridotVault services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="max-w-(--container-max-width) mx-auto px-8 py-24">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-neutral-400 mb-6">
          Last updated: January 2026
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="text-neutral-400">
          By accessing or using PeridotVault, you agree to be bound by these
          Terms and Conditions.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. Use of Services
        </h2>
        <p className="text-neutral-400">
          You may use our services only for lawful purposes and in accordance
          with these terms.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          3. Intellectual Property
        </h2>
        <p className="text-neutral-400">
          The PeridotVault platform and its original content, features, and
          functionality are owned by PeridotVault and are protected by
          international copyright laws.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. User Accounts
        </h2>
        <p className="text-neutral-400">
          You are responsible for maintaining the confidentiality of your
          account and password.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          5. Limitation of Liability
        </h2>
        <p className="text-neutral-400">
          PeridotVault shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact</h2>
        <p className="text-neutral-400">
          For questions about these Terms, contact us at
          support@peridotvault.com.
        </p>
      </div>
    </div>
  );
}
