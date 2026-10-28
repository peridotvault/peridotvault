import { ReactNode } from "react";
import "@/shared/styles/globals.css";
import { Footer } from "@/layouts/Footer";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="bg-background">
      <main className="mx-auto flex min-h-screen w-full max-w-(--container-max-width) flex-col justify-between border-x border-line">
        {children}
        <Footer />
      </main>
    </div>
  );
}
