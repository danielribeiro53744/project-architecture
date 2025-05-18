"use client";

import CookieConsent from "react-cookie-consent";
import { useTheme } from "next-themes";

export function CookieConsentBanner() {
  const { theme } = useTheme();

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      style={{
        background: theme === "dark" ? "#1a1a1a" : "#f9f9f9",
        color: theme === "dark" ? "#ffffff" : "#000000",
        borderTop: `1px solid ${theme === "dark" ? "#333333" : "#e5e5e5"}`,
      }}
      buttonStyle={{
        background: theme === "dark" ? "#ffffff" : "#000000",
        color: theme === "dark" ? "#000000" : "#ffffff",
        borderRadius: "0.375rem",
        padding: "0.5rem 1rem",
      }}
      declineButtonStyle={{
        background: "transparent",
        border: `1px solid ${theme === "dark" ? "#ffffff" : "#000000"}`,
        borderRadius: "0.375rem",
        padding: "0.5rem 1rem",
      }}
    >
      This website uses cookies to enhance your experience. By continuing to browse,
      you agree to our use of cookies.
    </CookieConsent>
  );
}