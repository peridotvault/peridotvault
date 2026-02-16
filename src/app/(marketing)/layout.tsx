import { ReactNode } from "react";
import "@/shared/styles/globals.css";
import { Footer } from "@/layouts/Footer";
import { Music } from "@/layouts/Music";
import { Navbar } from "@/layouts/Navbar";
import { FrameInvertedRadius } from "@/layouts/FrameInvertedRadius";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      <FrameInvertedRadius />
      <Navbar />
      <main className="flex flex-col w-full overflow-hidden min-h-screen justify-between p-2">
        {children}
      </main>
      <Music />
      <Footer />
    </div>
  );
}
