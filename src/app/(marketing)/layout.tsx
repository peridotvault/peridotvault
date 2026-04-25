import { ReactNode } from "react";
import "@/shared/styles/globals.css";
import { Footer } from "@/layouts/Footer";
import { Navbar } from "@/layouts/Navbar";
import { FrameInvertedRadius } from "@/layouts/FrameInvertedRadius";
import dynamic from "next/dynamic";

const Music = dynamic(() => import("@/layouts/Music").then((mod) => ({ default: mod.Music })));

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
