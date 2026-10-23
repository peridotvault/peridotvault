// Centralized PeridotID backlinks (app + developer dashboard + docs).
//
// Every outbound PeridotID link in marketing pages must resolve through
// PERIDOT_URLS so a sandbox/staging flip is a one-line env change instead
// of a copy hunt. No secrets, keys, or customer data live here.

const appUrl =
  process.env.NEXT_PUBLIC_PERIDOT_APP_URL ?? "https://peridot.id";
const dashboardUrl =
  process.env.NEXT_PUBLIC_PERIDOT_DASHBOARD_URL ??
  "https://dashboard.peridot.id";
const docsUrl =
  process.env.NEXT_PUBLIC_PERIDOT_DOCS_URL ?? "https://docs.peridot.id";

export const PERIDOT_URLS = {
  /** Public PeridotID app: https://peridot.id */
  app: appUrl,
  /** Developer dashboard: https://dashboard.peridot.id */
  dashboard: dashboardUrl,
  /** Product docs (same host the Navbar links to). */
  docs: docsUrl,
} as const;
