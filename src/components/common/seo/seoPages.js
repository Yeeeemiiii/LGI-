const BRAND = "LGI";

// One entry per page: the title, the description and whether to keep it out
// of search results. Blog articles set their own in SingleBlog.jsx.
const PAGES = {
  "/": {
    title: "Languages for Growth and Impact (LGI) | Courses, Community & Resources",
    description:
      "Languages for Growth and Impact (LGI Foundation) empowers learners through language courses, placement testing, library resources, and community programs.",
  },
  "/about": {
    title: `About Us | ${BRAND}`,
    description:
      "Learn about Languages for Growth and Impact (LGI Foundation): who we are, what we stand for and how we support language learners.",
  },
  "/team": {
    title: `Our Team | ${BRAND}`,
    description: "Meet the team behind Languages for Growth and Impact (LGI).",
  },
  "/programs": {
    title: `Language Learning Programs | ${BRAND}`,
    description:
      "Explore LGI's structured language immersion programs, tailored to your learning goals, lifestyle and proficiency level.",
  },
  "/courses": {
    title: `Explore Courses | ${BRAND}`,
    description:
      "Browse LGI's online language courses and find the right level, schedule and class for your learning goals.",
  },
  "/languages": {
    title: `Languages and Free Placement Test | ${BRAND}`,
    description:
      "See the languages LGI teaches, take the free online placement test and find your level from A1 to C2.",
  },
  "/enroll": {
    title: `Enroll in a Language Course | ${BRAND}`,
    description:
      "Choose your language, level and schedule, and enroll in an LGI language course online.",
  },
  "/placement-test": {
    title: `Free Online Placement Test | ${BRAND}`,
    description:
      "Take LGI's free online placement test to find your exact language level and the right class for you.",
  },
  "/resources": {
    title: `LGI Talks and Resources | ${BRAND}`,
    description:
      "Listen to LGI Talks, conversations that teach, and find learning resources and answers to common questions.",
  },
  "/library": {
    title: `LGI Library: Recommended Language Books | ${BRAND}`,
    description:
      "Browse recommended books and resources to accelerate your language learning.",
  },
  "/blog": {
    title: `Blog and News | ${BRAND}`,
    description:
      "Read inspiring stories, volunteer spotlights and community updates from Languages for Growth and Impact.",
  },
  "/community": {
    title: `LGI Community | ${BRAND}`,
    description:
      "Join the LGI global network: connect with fellow learners, follow our outreach programs and catch up on LGI Talks.",
  },
  "/contact": {
    title: `Contact Us | ${BRAND}`,
    description:
      "Contact LGI by email or phone, or find us in Abuja, Ibadan, Lagos and online. Open Monday to Friday, 9am to 5pm WAT.",
  },
  "/feedback": {
    title: `Share Your Feedback | ${BRAND}`,
    description:
      "Tell us what you think about LGI. Your feedback helps us improve our courses and community.",
  },
  "/login": { title: `Student Login | ${BRAND}`, noindex: true },
  "/dashboard": { title: `Dashboard | ${BRAND}`, noindex: true },
  "/admin-blog": { title: `Admin | ${BRAND}`, noindex: true },
};

export const NOT_FOUND = { title: `Page not found | ${BRAND}`, noindex: true };

// Returns the SEO settings for a URL path, or null for blog articles (they
// set their own once the article has loaded).
export const getPageSeo = (pathname) => {
  const key = pathname.length > 1 ? pathname.replace(/\/+$/, "").toLowerCase() : "/";
  if (key.startsWith("/blog/")) return null;
  return { ...(PAGES[key] || NOT_FOUND), path: key || "/" };
};
