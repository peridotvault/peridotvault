import { ReactNode } from "react";
import "@/shared/styles/globals.css";
import { Footer } from "@/layouts/Footer";
import { RailEdges } from "@/shared/components/atoms/Rail";
import { Navbar } from "@/layouts/Navbar";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="bg-background">
      <Navbar />
      <main className="relative isolate mx-auto flex min-h-screen w-full max-w-(--container-max-width) flex-col justify-between">
        <RailEdges className="z-40" />
        {children}
        <Footer />
      </main>
    </div>
  );
}
