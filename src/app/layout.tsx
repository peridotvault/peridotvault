import "@/shared/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import ScrollToHash from "@/shared/components/atoms/ScrollToHash";
import { ToasterComponent } from "@/shared/infra/toast/ToasterComponent";
import { buildRootMetadata } from "@/features/seo";

export const metadata = buildRootMetadata();

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollToHash />
        <ToasterComponent />
        {children}
        <GoogleAnalytics gaId="G-H1QJ6K6D7T" />
      </body>
    </html>
  );
}
