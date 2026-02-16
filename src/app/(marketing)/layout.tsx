import type { Metadata } from "next";
import { ReactNode } from "react";
import "@/shared/styles/globals.css";
import { Footer } from "@/layouts/Footer";
import { Music } from "@/layouts/Music";
// import { usePathname } from "next/navigation";
import ScrollToHash from "@/shared/components/atoms/ScrollToHash";
import { Navbar } from "@/layouts/Navbar";
import { ToasterComponent } from "@/shared/infra/toast/ToasterComponent";
import { FrameInvertedRadius } from "@/layouts/FrameInvertedRadius";

export const metadata: Metadata = {
  title: "PeridotVault",
  description: "PeridotVault frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  // const pathname = usePathname();
  // const noFooter = pathname === "/peri";

  return (
    <html lang="en">
      <body>
        <ScrollToHash />
        <ToasterComponent />
        <FrameInvertedRadius />
        <Navbar />
        <main className="flex flex-col w-full overflow-hidden min-h-screen justify-between p-2">
          {children}
        </main>
        <Music />
        <Footer />
      </body>
    </html>
  );
}
