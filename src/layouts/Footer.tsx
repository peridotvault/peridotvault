import Link from "next/link";
import FitText from "../shared/components/atoms/FitText";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

export const Footer = () => {
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
  return (
    <footer className="flex justify-center ">
      <div className="max-w-[1200px] px-8 w-full flex flex-col pt-24 pb-8 gap-10 ">
        <div className="relative">
          <FitText min={24} max={224} className="mx-auto text-muted">
            <span className="font-bold">Peridot</span>
            <span className="font-light">Vault</span>
          </FitText>
          <div className="absolute w-full h-full bg-linear-to-t from-background top-0 left-0"></div>
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
          <span className="text-label">
            {new Date().getFullYear()} &copy; Antigane. All rights reserved.
          </span>
          <div className="flex gap-6 text-label">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
