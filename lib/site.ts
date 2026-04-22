const DEFAULT_SITE_URL = "https://thedevzoo.com";

function normalizeSiteUrl(value?: string) {
  return (value || DEFAULT_SITE_URL).replace(/\/$/, "");
}

export const SITE_NAME = "Devzoo";
export const SITE_EMAIL = "info@thedevzoo.com";
export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const SITE_HOST = (() => {
  try {
    return new URL(SITE_URL).host;
  } catch {
    return "thedevzoo.com";
  }
})();
export const SITE_DOMAIN = SITE_HOST.replace(/^www\./, "");
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function absoluteUrl(path = "") {
  if (!path || path === "/") {
    return SITE_URL;
  }

  return new URL(path.startsWith("/") ? path : `/${path}`, `${SITE_URL}/`).toString();
}
