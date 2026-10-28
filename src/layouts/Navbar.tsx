"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import StaggeredMenu from "../shared/components/atoms/StaggeredMenu";
import { PERIDOT_URLS } from "@/features/peridot/peridot-urls";
import Image from "next/image";

type MenuItem = {
  label: string;
  ariaLabel: string;
  link: string;
  target: "_self" | "_blank";
  type: "route" | "waitlist" | "external";
};

type SocialItem = {
  label: string;
  link: string;
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  const menuItems: MenuItem[] = [
    // {
    //   label: "PERI",
    //   ariaLabel: "View our services",
    //   link: "/peri",
    //   target: "_self",
    //   type: "route",
    // },
    // {
    //   label: "AI",
    //   ariaLabel: "Get in touch",
    //   link: "/ai",
    //   target: "_self",
    //   type: "route",
    // },
    {
      label: "Roadmap",
      ariaLabel: "Learn about us",
      link: "/roadmap",
      target: "_self",
      type: "route",
    },
    {
      label: "Identity",
      ariaLabel: "Peridot ID gaming identity",
      link: "/identity",
      target: "_self",
      type: "route",
    },

    // 🔹 Team sekarang link ke "/#team"
    {
      label: "Waitlist",
      ariaLabel: "Join Our Waitlist",
      link: "/#waitlist",
      target: "_self",
      type: "waitlist",
    },

    {
      label: "Docs",
      ariaLabel: "Go to docs",
      link: PERIDOT_URLS.docs,
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
    <header className="sticky top-0 z-50 ml-[calc(50%-50vw)] w-screen border-y border-line bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-(--container-max-width) items-center justify-between px-12 py-4 max-md:px-6">
        <Link href="/" className="text-2xl hidden items-center gap-2 md:flex">
          <Image
            src="/logo/logo.png"
            className="h-8 w-8"
            alt="PeridotVault logo"
            width={169}
            height={169}
            priority
          />
        </Link>

        {/* Desktop actions */}
        <nav className="gap-8 items-center hidden md:flex text-lg">
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
            if (item.type === "waitlist") {
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

        <a
          href="https://web.peridotvault.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="max-md:hidden inline-flex h-12 items-center gap-2 bg-white px-6 text-base font-medium text-black transition-colors duration-300 hover:bg-accent"
        >
          Try Web Version
          <span aria-hidden="true">↳</span>
        </a>

        <div className="md:hidden flex-1">
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
      </div>
    </header>
  );
};
