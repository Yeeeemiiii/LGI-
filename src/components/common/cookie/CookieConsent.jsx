import React, { useEffect, useState } from "react";
import "./cookieConsent.css";

const STORAGE_KEY = "lgi_cookie_consent";

const updateConsent = (granted) => {
  if (typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    // Advertising stays off: LGI only uses analytics.
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
};

const readChoice = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const saveChoice = (value) => {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* storage unavailable: choice just won't persist */
  }
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = readChoice();
    if (choice === "granted") {
      updateConsent(true);
    } else if (choice === null) {
      setVisible(true);
    }
  }, []);

  const choose = (granted) => {
    saveChoice(granted ? "granted" : "denied");
    updateConsent(granted);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p className="cookie-text">
        We use Google Analytics cookies to understand how visitors use our
        website and to improve it. They are only set if you accept.
      </p>
      <div className="cookie-actions">
        <button type="button" className="cookie-btn cookie-decline" onClick={() => choose(false)}>
          Decline
        </button>
        <button type="button" className="cookie-btn cookie-accept" onClick={() => choose(true)}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
