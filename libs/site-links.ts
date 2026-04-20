export const CALENDLY_URL = "https://calendly.com/thedevzoo711/30min";

export function isExternalHref(href: string) {
  return /^https?:\/\//.test(href);
}
