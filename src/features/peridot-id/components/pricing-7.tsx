"use client";

import { motion } from "motion/react";
import { Check, Minus } from "lucide-react";
import { PERIDOT_URLS } from "@/features/peridot/peridot-urls";
import { Button } from "@/shared/components/molecules/Button";

type Vendor = {
  name: string;
  price: string;
  cta: string;
  href: string;
  external?: boolean;
  popular: boolean;
};

const vendors: Vendor[] = [
  {
    name: "Peridot ID",
    price: "Free",
    cta: "Start free",
    href: PERIDOT_URLS.dashboard,
    popular: true,
  },
  {
    name: "Privy",
    price: "$499",
    cta: "See Privy pricing",
    href: "https://privy.io/pricing",
    external: true,
    popular: false,
  },
  {
    name: "ZeroDev",
    price: "$399",
    cta: "See ZeroDev pricing",
    href: "https://zerodev.app/pricing",
    external: true,
    popular: false,
  },
];

const pricingRows = [
  {
    feature: "Billing unit",
    values: ["Free — no meter", "Monthly active users", "Credits per action"],
  },
  {
    feature: "Included before meter starts",
    values: ["Unlimited", "50K sigs + $1M volume", "100K credits"],
  },
  {
    feature: "Base fee",
    values: ["$0, forever", "$299–$499/mo tiers", "$69–$399/mo tiers"],
  },
  {
    feature: "Usage meter",
    values: ["None", "$0.01/sig past 50K", "$0.001/credit past 1M"],
  },
  {
    feature: "At 3,000 users × 5 actions/day",
    values: ["Free", "~$4,499/mo", "~$3,899/mo"],
  },
];

const productRows: Array<{
  feature: string;
  values: Array<true | false | string>;
}> = [
  { feature: "Embedded wallets", values: [true, true, true] },
  { feature: "Social, email & passkey login", values: [true, true, true] },
  {
    feature: "Cross-game profiles & shared sessions",
    values: [true, false, false],
  },
  { feature: "Free seat, free signature", values: [true, false, false] },
  { feature: "Free tier covers mainnet", values: [true, true, false] },
  {
    feature: "Non-EVM chains (e.g. Solana)",
    values: ["Any chain at tx time", "EVM, Solana, Bitcoin", "EVM chains"],
  },
  {
    feature: "Delegated / session-key access",
    values: ["Game sessions", "Delegated access", "Session keys + policies"],
  },
  { feature: "Gasless transactions for players", values: [false, true, true] },
];

function Cell({ v }: { v: true | false | string }) {
  if (v === true) {
    return (
      <span className="mx-auto grid h-5 w-5 place-items-center bg-accent text-background">
        <Check className="h-3 w-3" />
      </span>
    );
  }
  if (v === false) {
    return (
      <span className="mx-auto grid h-5 w-5 place-items-center bg-white/10 text-neutral-500">
        <Minus className="h-3 w-3" />
      </span>
    );
  }
  return <span className="text-lg text-foreground">{v}</span>;
}

export default function Pricing7() {
  return (
    <div className="w-full">
      <div className="grid max-w-(--container-max-width) grid-cols-1 border border-border md:grid-cols-4">
        <div className="border-b border-border p-6 md:border-b-0 md:border-r">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            Compare
          </p>
          <p className="mt-2 text-lg font-semibold text-foreground">
            Pick your identity stack
          </p>
          <p className="mt-1 text-xs text-paragraph">
            3 vendors · public pricing
          </p>
        </div>
        {vendors.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className={`flex flex-col gap-4 border-b border-border p-6 md:border-b-0 ${
              idx < vendors.length - 1 ? "md:border-r" : ""
            } ${t.popular ? "bg-accent/5" : ""}`}
          >
            <p
              className={`text-xl font-semibold ${idx === 0 ? "text-foreground" : "text-muted-foreground"}`}
            >
              {t.name}
            </p>
            <div className="mt-8">
              <span
                className={`text-5xl font-semibold ${idx === 0 ? "text-accent" : "text-muted-foreground"}`}
              >
                {t.price}
              </span>
            </div>
            {t.external ? (
              <a
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex w-full cursor-pointer items-center justify-center border border-border py-2.5 text-sm font-semibold tracking-[0.15em] text-foreground uppercase transition-colors hover:bg-white/5"
              >
                {t.cta}
              </a>
            ) : (
              <a
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Start building with Peridot ID for free (opens in a new tab)"
                className="mt-auto rounded-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <Button tabIndex={-1} sharp fullWidth>
                  {t.cta}
                </Button>
              </a>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-0 max-w-(--container-max-width)">
        <div className="grid grid-cols-1 border-x border-border bg-white/5 md:grid-cols-4">
          <div className="col-span-full p-3 text-base font-semibold text-foreground">
            Pricing
          </div>
        </div>
        {pricingRows.map((r) => (
          <div
            key={r.feature}
            className="grid grid-cols-1 border-x border-b border-border md:grid-cols-4"
          >
            <div className="border-border p-4 text-lg text-paragraph">
              {r.feature}
            </div>
            {r.values.map((v, i) => (
              <div
                key={i}
                className={`flex items-center justify-between border-t border-border p-4 text-center text-lg md:block md:border-l md:border-t-0 ${
                  i === 0 ? "bg-accent/5" : ""
                }`}
              >
                <span className="text-sm tracking-wider text-muted-foreground uppercase md:hidden">
                  {vendors[i].name}
                </span>
                <span
                  className={
                    i === 0
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  }
                >
                  {v}
                </span>
              </div>
            ))}
          </div>
        ))}

        <div className="grid grid-cols-1 border-x border-border bg-white/5 md:grid-cols-4">
          <div className="col-span-full p-3 text-base font-semibold text-foreground">
            Product
          </div>
        </div>
        {productRows.map((r) => (
          <div
            key={r.feature}
            className="grid grid-cols-1 border-x border-b border-border md:grid-cols-4"
          >
            <div className="border-border p-4 text-lg text-paragraph">
              {r.feature}
            </div>
            {r.values.map((v, i) => (
              <div
                key={i}
                className={`flex items-center justify-between border-t border-border p-4 text-center md:block md:border-l md:border-t-0 ${
                  i === 0 ? "bg-accent/5" : ""
                }`}
              >
                <span className="text-sm tracking-wider text-muted-foreground uppercase md:hidden">
                  {vendors[i].name}
                </span>
                <span className={i === 0 ? "" : "opacity-50"}>
                  <Cell v={v} />
                </span>
              </div>
            ))}
          </div>
        ))}
        <p className="mt-4 text-xs text-muted-foreground">
          Sources: privy.io/pricing, zerodev.app/pricing.
        </p>
      </div>
    </div>
  );
}
