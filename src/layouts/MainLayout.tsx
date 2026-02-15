import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import ScrollToHash from "../shared/components/atoms/ScrollToHash";
import { Music } from "./Music";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const pathname = usePathname();
  const noFooter = pathname === "/peri";

  return (
    <main className="flex flex-col w-full overflow-hidden min-h-screen justify-between">
      <ScrollToHash />
      <Navbar />
      {children}
      <Music />
      {!noFooter && <Footer />}
    </main>
  );
};
