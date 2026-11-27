// Submits a form to Netlify Forms. The form must also exist as a hidden static
// form with the same name and fields in public/index.html, so Netlify detects
// it at build time. Only works on a Netlify deploy, not on localhost.
export const submitNetlifyForm = async (formName, fields) => {
  const body = new URLSearchParams({ "form-name": formName, ...fields }).toString();
  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!response.ok) {
    throw new Error(`Form submission failed (${response.status})`);
  }
};
