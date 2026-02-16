"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import StaggeredMenu from "../shared/components/atoms/StaggeredMenu";
import { Button } from "@/shared/components/molecules/Button";

type MenuItem = {
  label: string;
  ariaLabel: string;
  link: string;
  target: "_self" | "_blank";
  type: "route" | "team" | "external";
};

type SocialItem = {
  label: string;
  link: string;
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  const menuItems: MenuItem[] = [
    {
      label: "PERI",
      ariaLabel: "View our services",
      link: "/peri",
      target: "_self",
      type: "route",
    },
    {
      label: "AI",
      ariaLabel: "Get in touch",
      link: "/ai",
      target: "_self",
      type: "route",
    },
    {
      label: "Roadmap",
      ariaLabel: "Learn about us",
      link: "/roadmap",
      target: "_self",
      type: "route",
    },

    // 🔹 Team sekarang link ke "/#team"
    {
      label: "Team",
      ariaLabel: "View our team",
      link: "/#team",
      target: "_self",
      type: "team",
    },

    {
      label: "Docs",
      ariaLabel: "Go to docs",
      link: "https://peridotvault.gitbook.io/docs",
      target: "_blank",
      type: "external",
    },
  ];

  const socialItems: SocialItem[] = [
    { label: "X", link: "https://x.com/peridotvault" },
    { label: "Instagram", link: "https://www.instagram.com/peridotvault/" },
    { label: "Discord", link: "https://discord.com/invite/uBW4dvTR5E" },
    { label: "Github", link: "https://github.com/peridotvault" },
    { label: "Telegram", link: "https://t.me/peridotvault" },
  ];

  const base = "hover:font-bold duration-300 hover:text-accent_primary";
  const active = "font-bold text-accent_primary";
  const inactive = "";

  // cek apakah Team lagi aktif (di / dan hash #team)
  const isTeamActive = pathname === "/" && hash === "#team";

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  // blur background on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll saat drawer terbuka
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  // close dengan Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="p-4 fixed top-0 left-0 w-full z-50">
      <div
        className={`transition-all duration-300 rounded-2xl flex justify-between border ${
          isScrolled ? "backdrop-blur-lg border-white/10" : "border-transparent"
        } max-md:hidden`}
      >
        <div className="w-full px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl flex items-center gap-2">
            <img src="/Logo-full.png" className="h-6" alt="PeridotVault logo" />
            <div>
              <span className="font-bold">Peridot</span>
              <span>Vault</span>
            </div>
          </Link>

          {/* Desktop actions */}
          <nav className="gap-8 items-center flex text-lg">
            {menuItems.map((item, index) => {
              // 1) Route internal
              if (item.type === "route") {
                const isActive = pathname === item.link;
                return (
                  <Link
                    key={index}
                    href={item.link}
                    aria-label={item.ariaLabel}
                    className={`${base} ${isActive ? active : inactive}`}
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                );
              }

              // 2) Team → Link ke "/#team" + cek hash
              if (item.type === "team") {
                return (
                  <Link
                    key={index}
                    href={item.link} // "/#team"
                    aria-label={item.ariaLabel}
                    className={`${base} ${isTeamActive ? active : inactive}`}
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                );
              }

              // 3) External link → <a> biasa
              return (
                <a
                  key={index}
                  href={item.link}
                  aria-label={item.ariaLabel}
                  className={base}
                  target={item.target}
                  rel={item.target === "_blank" ? "noreferrer" : undefined}
                  title={item.label}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <Link href="https://web.peridotvault.com/" target="_blank">
            <Button>Try Web Version</Button>
          </Link>
        </div>
      </div>

      <div className="fixed top-0 left-0 inset-0 z-50 md:hidden ">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={["#90EE90", "#4D8A6A"]}
          accentColor="#4D8A6A"
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
        />
      </div>
    </header>
  );
};
