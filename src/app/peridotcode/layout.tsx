import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PeridotCode - AI-Powered Game Development Assistant",
  description:
    "PeridotCode is an open-source AI-powered coding assistant specifically designed for game development. Generate game logic, scripts, shaders, and more.",
  keywords: [
    "game development",
    "AI coding assistant",
    "Unity",
    "Unreal Engine",
    "Godot",
    "game scripts",
    "shader generation",
    "open source",
    "developer tools",
  ],
  authors: [{ name: "PeridotVault" }],
  creator: "PeridotVault",
  publisher: "PeridotVault",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://peridotvault.com/peridotcode",
    siteName: "PeridotCode",
    title: "PeridotCode - AI-Powered Game Development Assistant",
    description:
      "Open-source AI coding assistant for game developers. Generate scripts, shaders, and game logic with AI.",
    images: [
      {
        url: "/logo/peridotcode-horizontal_logo.png",
        width: 1200,
        height: 630,
        alt: "PeridotCode Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeridotCode - AI-Powered Game Development Assistant",
    description:
      "Open-source AI coding assistant for game developers. Generate scripts, shaders, and game logic with AI.",
    images: ["/logo/peridotcode-horizontal_logo.png"],
    creator: "@peridotvault",
  },
  icons: {
    icon: "/logo/peridotcode-mark_logo_nobg.png",
    shortcut: "/logo/peridotcode-mark_logo_nobg.png",
    apple: "/logo/peridotcode-mark_logo_withbackground.png",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://peridotvault.com/peridotcode",
  },
};

export default function PeridotCodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data for Logo and Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "PeridotCode",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Cross-platform",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description:
              "AI-powered coding assistant for game development. Supports Unity, Unreal Engine, Godot, and more.",
            image: {
              "@type": "ImageObject",
              url: "https://peridotvault.com/logo/peridotcode-horizontal_logo.png",
              width: 1200,
              height: 630,
            },
            logo: {
              "@type": "ImageObject",
              url: "https://peridotvault.com/logo/peridotcode-mark_logo_nobg.png",
              width: 512,
              height: 512,
            },
            brand: {
              "@type": "Brand",
              name: "PeridotCode",
              logo: {
                "@type": "ImageObject",
                url: "https://peridotvault.com/logo/peridotcode-mark_logo_nobg.png",
              },
            },
            publisher: {
              "@type": "Organization",
              name: "PeridotVault",
              logo: {
                "@type": "ImageObject",
                url: "https://peridotvault.com/logo/peridotcode-horizontal_logo.png",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "100",
            },
          }),
        }}
      />

      {/* Additional JSON-LD for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "PeridotVault",
            url: "https://peridotvault.com",
            logo: {
              "@type": "ImageObject",
              url: "https://peridotvault.com/logo/peridotcode-horizontal_logo.png",
              width: 1200,
              height: 630,
              caption: "PeridotCode Logo",
            },
            sameAs: [
              "https://github.com/peridotvault",
              "https://twitter.com/peridotvault",
              "https://discord.com/invite/uBW4dvTR5E",
            ],
          }),
        }}
      />

      {children}
    </>
  );
}
