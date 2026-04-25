"use client";

import { useEffect, useRef, useState } from "react";
import { GetUpdate } from "@/shared/components/organisms/GetUpdate";

export function FooterUpdateWrapper() {
  const updateRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const [updateHeight, setUpdateHeight] = useState(0);

  useEffect(() => {
    if (!updateRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      setUpdateHeight(entry.contentRect.height);
    });

    observer.observe(updateRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (footerRef.current) {
      footerRef.current.style.paddingTop = `${updateHeight / 2}px`;
    }
  }, [updateHeight]);

  return (
    <>
      <div
        ref={updateRef}
        style={{
          marginBottom: `-${updateHeight / 2}px`,
        }}
      >
        <GetUpdate />
      </div>
      <footer
        ref={footerRef}
        className="flex justify-center bg-accent text-background rounded-[30] m-6 max-md:m-3"
      >
        <div className="max-w-(--container-max-width) px-8 w-full flex flex-col pt-24 pb-8 gap-10">
          <hr className="opacity-20 border-t border-label" />

          <div className="flex gap-6 justify-end max-md:justify-start duration-300">
            <SocialLinks />
          </div>

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
    </>
  );
}

import Link from "next/link";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

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

function SocialLinks() {
  return (
    <>
      {socialItems.map((item, idx) => (
        <a
          href={item.link}
          key={idx}
          aria-label={item.label}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl"
        >
          <item.Icon />
        </a>
      ))}
    </>
  );
}
