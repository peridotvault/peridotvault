import React from "react";
import type { IconDefinition } from "./fontawesome-core";

type FontAwesomeIconProps = {
  icon?: IconDefinition | string | null;
  className?: string;
};

const FALLBACK_GLYPH = "*";

const glyphByName: Record<string, string> = {
  "arrow-right": "->",
  "backward-step": "<<",
  "bars-progress": "|||",
  "book": "[book]",
  check: "ok",
  "chevron-left": "<",
  "chevron-right": ">",
  "circle-notch": "o",
  discord: "[d]",
  fan: "*",
  "forward-step": ">>",
  gamepad: "[pad]",
  github: "[gh]",
  instagram: "[ig]",
  pause: "||",
  play: ">",
  store: "[shop]",
  telegram: "[tg]",
  vault: "[vault]",
  "volume-high": "[vol+]",
  "volume-off": "[mute]",
  wallet: "[wallet]",
  windows: "[win]",
  "x-twitter": "[x]",
  apple: "[apple]",
};

export const FontAwesomeIcon = ({ icon, className }: FontAwesomeIconProps) => {
  const name = typeof icon === "string" ? icon : icon?.iconName;
  const glyph = (name && glyphByName[name]) || FALLBACK_GLYPH;
  return (
    <span aria-hidden="true" className={className}>
      {glyph}
    </span>
  );
};
