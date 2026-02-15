"use client";

import Link from "next/link";
import FitText from "../shared/components/atoms/FitText";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";
import { GetUpdate } from "@/shared/components/organisms/GetUpdate";
import { useEffect, useRef, useState } from "react";

export const Footer = () => {
  const updateRef = useRef<HTMLDivElement>(null);
  const [updateHeight, setUpdateHeight] = useState(0);

  const socialItems = [
    { label: "X", link: "https://x.com/peridotvault", Icon: FaXTwitter },
    {
      label: "Instagram",
      link: "https://www.instagram.com/peridotvault/",
      Icon: FaInstagram,
    },
    {
      label: "Discord",
      link: "https://discord.com/invite/uBW4dvTR5E",
      Icon: FaDiscord,
    },
    {
      label: "Github",
      link: "https://github.com/peridotvault",
      Icon: FaGithub,
    },
    { label: "Telegram", link: "https://t.me/peridotvault", Icon: FaTelegram },
  ];

  useEffect(() => {
    if (!updateRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      setUpdateHeight(entry.contentRect.height);
    });

    observer.observe(updateRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col relative z-40">
      <div
        ref={updateRef}
        style={{
          marginBottom: `-${updateHeight / 2}px`,
        }}
      >
        <GetUpdate />
      </div>
      <footer
        className="flex justify-center bg-accent text-background rounded-4xl m-3"
        style={{
          paddingTop: updateHeight / 2,
        }}
      >
        <div className="max-w-(--container-max-width) px-8 w-full flex flex-col pt-24 pb-8 gap-10 ">
          <div className="relative">
            <FitText
              min={24}
              max={224}
              className="mx-auto text-center text-primary/50"
            >
              <span className="font-bold">Peridot</span>
              <span className="font-light">Vault</span>
            </FitText>
            <div className="absolute w-full h-full bg-linear-to-t from-accent bottom-0 left-0"></div>
          </div>

          <hr className="opacity-20 border-t border-label" />

          {/* content */}
          <div className="flex gap-6 justify-end max-md:justify-start duration-300">
            {socialItems.map((item, idx) => (
              <a
                href={item.link}
                key={idx}
                aria-label={item.label}
                target="_blank"
                rel="noreferrer"
                className="text-2xl"
              >
                <item.Icon />
              </a>
            ))}
          </div>

          {/* terms  */}
          <div className="w-full flex max-md:flex-col gap-6 max-md:gap-2 justify-between duration-300">
            <span className="text-background/50">
              {new Date().getFullYear()} &copy; Antigane. All rights reserved.
            </span>
            <div className="flex gap-6 text-background/50">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms and Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
