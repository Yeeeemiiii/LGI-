import React from "react";
import { render } from "@testing-library/react";
import Seo from "./Seo";
import { getPageSeo } from "./seoPages";

const meta = (attr, key) => document.head.querySelector(`meta[${attr}="${key}"]`);
const canonical = () => document.head.querySelector('link[rel="canonical"]');

describe("getPageSeo", () => {
  test("gives each public page its own title, description and path", () => {
    const page = getPageSeo("/placement-test");
    expect(page.title).toBe("Free Online Placement Test | LGI");
    expect(page.description).toMatch(/placement test/i);
    expect(page.path).toBe("/placement-test");
    expect(page.noindex).toBeUndefined();
  });

  test("treats capitalised paths and trailing slashes as the lowercase page", () => {
    expect(getPageSeo("/Library").path).toBe("/library");
    expect(getPageSeo("/Enroll/").path).toBe("/enroll");
  });

  test("keeps private pages out of search results", () => {
    ["/login", "/dashboard", "/admin-blog"].forEach((p) => {
      expect(getPageSeo(p).noindex).toBe(true);
    });
  });

  test("marks unknown paths as noindex", () => {
    const page = getPageSeo("/does-not-exist");
    expect(page.title).toMatch(/Page not found/);
    expect(page.noindex).toBe(true);
  });

  test("leaves blog articles to SingleBlog", () => {
    expect(getPageSeo("/blog/abc123")).toBeNull();
    expect(getPageSeo("/blog").path).toBe("/blog");
  });

  test("every indexable page has a distinct title and a description under 160 characters", () => {
    const paths = [
      "/", "/about", "/team", "/programs", "/courses", "/languages", "/enroll",
      "/placement-test", "/resources", "/library", "/blog", "/community", "/contact", "/feedback",
    ];
    const titles = paths.map((p) => getPageSeo(p).title);
    expect(new Set(titles).size).toBe(paths.length);
    paths.forEach((p) => {
      const { description } = getPageSeo(p);
      expect(description.length).toBeGreaterThan(40);
      expect(description.length).toBeLessThanOrEqual(160);
    });
  });
});

describe("Seo", () => {
  test("sets title, description, canonical and social tags", () => {
    render(<Seo title="About Us | LGI" description="About LGI." path="/about" />);
    expect(document.title).toBe("About Us | LGI");
    expect(meta("name", "description").getAttribute("content")).toBe("About LGI.");
    expect(canonical().getAttribute("href")).toBe("https://lgimpact.org/about");
    expect(meta("property", "og:url").getAttribute("content")).toBe("https://lgimpact.org/about");
    expect(meta("property", "og:title").getAttribute("content")).toBe("About Us | LGI");
    expect(meta("name", "robots")).toBeNull();
  });

  test("adds noindex for private pages and removes it on public ones", () => {
    const { unmount } = render(<Seo title="Login | LGI" path="/login" noindex />);
    expect(meta("name", "robots").getAttribute("content")).toBe("noindex, nofollow");
    unmount();
    render(<Seo title="About Us | LGI" path="/about" />);
    expect(meta("name", "robots")).toBeNull();
  });
});
