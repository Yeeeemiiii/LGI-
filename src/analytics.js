// Sends a GA4 event. Does nothing if the Google tag is not loaded (for example
// when an ad blocker removes it). Consent is handled by Consent Mode in
// public/index.html, so no consent check is needed here. Never pass names,
// emails or other personal data in params.
export const trackEvent = (name, params = {}) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
};
