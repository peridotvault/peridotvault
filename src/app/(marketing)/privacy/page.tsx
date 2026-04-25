import { createMetadata } from "@/features/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Learn how PeridotVault collects, uses, and protects your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="max-w-(--container-max-width) mx-auto px-8 py-24">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-neutral-400 mb-6">
          Last updated: January 2026
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p className="text-neutral-400">
          We collect information you provide directly to us, such as when you
          create an account, make a purchase, or contact us for support.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. How We Use Information
        </h2>
        <p className="text-neutral-400">
          We use the information we collect to provide, maintain, and improve
          our services, process transactions, and communicate with you.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          3. Information Sharing
        </h2>
        <p className="text-neutral-400">
          We do not sell or share your personal information with third parties
          except as described in this policy.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Security</h2>
        <p className="text-neutral-400">
          We implement reasonable security measures to protect your personal
          information from unauthorized access, alteration, or destruction.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
        <p className="text-neutral-400">
          If you have questions about this Privacy Policy, please contact us at
          support@peridotvault.com.
        </p>
      </div>
    </div>
  );
}
