import type { IconDefinition } from "./fontawesome-core";

const make = (name: string): IconDefinition => ({ iconName: name });

export const faApple = make("apple");
export const faDiscord = make("discord");
export const faGithub = make("github");
export const faInstagram = make("instagram");
export const faTelegram = make("telegram");
export const faWindows = make("windows");
export const faXTwitter = make("x-twitter");
