import type { Metadata } from "next";
import { ReactNode } from "react";
import ClientShell from "./ClientShell";
import "@/shared/styles/globals.css";

export const metadata: Metadata = {
  title: "PeridotVault",
  description: "PeridotVault frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
