import { trackEvent } from "./analytics";

describe("trackEvent", () => {
  afterEach(() => {
    delete window.gtag;
  });

  test("sends the event with its parameters through gtag", () => {
    window.gtag = jest.fn();
    trackEvent("enroll_submit", { language: "German" });
    expect(window.gtag).toHaveBeenCalledWith("event", "enroll_submit", { language: "German" });
  });

  test("does nothing when the Google tag is not loaded", () => {
    expect(() => trackEvent("contact_submit")).not.toThrow();
  });
});
