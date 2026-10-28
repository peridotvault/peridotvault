import Link from "next/link";
import Image from "next/image";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";
import { GetUpdate } from "@/shared/components/organisms/GetUpdate";

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

export const Footer = () => {
  return (
    <>
      <GetUpdate />
      <footer className="w-full bg-background text-foreground">
        <div className="mx-auto w-full max-w-(--container-max-width)">
          <div className="flex items-center justify-between gap-6 px-12 py-10 max-md:flex-col max-md:items-start max-md:px-6">
            <span className="inline-flex items-center gap-2">
              <Image
                src="/logo/logo.png"
                className="h-8 w-8"
                alt="PeridotVault logo"
                width={169}
                height={169}
                draggable={false}
              />
              <span className="text-lg font-medium">PeridotVault</span>
            </span>
            <div className="flex gap-6">
              {socialItems.map((item) => (
                <a
                  href={item.link}
                  key={item.label}
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl transition-colors duration-300 hover:text-accent"
                >
                  <item.Icon />
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between gap-6 border-t border-line px-12 py-6 max-md:flex-col max-md:items-start max-md:px-6">
            <span className="text-paragraph">
              {new Date().getFullYear()} &copy; Antigane. All rights reserved.
            </span>
            <div className="flex gap-6 text-paragraph">
              <Link
                href="/privacy"
                className="transition-colors duration-300 hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition-colors duration-300 hover:text-foreground"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
