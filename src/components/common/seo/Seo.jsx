import { useEffect } from "react";

export const SITE_URL = "https://lgimpact.org";

const setMeta = (attr, key, value) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

const removeMeta = (attr, key) => {
  const el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (el) el.remove();
};

const setCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

// Sets the title, description, canonical URL and social tags for the current
// page. Search engines that render JavaScript (such as Google) read these
// after the page loads. Pass noindex for pages that should stay out of search.
const Seo = ({ title, description, path, noindex = false }) => {
  useEffect(() => {
    const url = SITE_URL + path;

    document.title = title;
    setCanonical(url);

    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
      setMeta("name", "twitter:description", description);
    }

    setMeta("property", "og:title", title);
    setMeta("name", "twitter:title", title);
    setMeta("property", "og:url", url);

    if (noindex) {
      setMeta("name", "robots", "noindex, nofollow");
    } else {
      removeMeta("name", "robots");
    }
  }, [title, description, path, noindex]);

  return null;
};

export default Seo;
