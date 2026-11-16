/**
 * Content for the Featured section (the browser + phone showcase under the hero).
 *
 * PLACEHOLDER: the link and the two images below are stand-ins while the layout is built.
 * Before publishing, replace `url` and the images with your own featured project.
 * Leave `url` empty ("") to hide the link; the section then shows "Concept preview".
 */
import desktopImage from "@/assets/work-web-1.jpg";
import mobileImage from "@/assets/work-web-2.jpg";

export const featured = {
  eyebrow: "Featured project",
  description:
    "A featured website shown the way visitors meet it: scrolling on a desktop screen and held in the hand on mobile.",
  url: "https://dsquaredmedia.net/",
  linkLabel: "Visit live site",
  desktop: {
    src: desktopImage,
    alt: "Featured project on a desktop browser",
  },
  mobile: {
    src: mobileImage,
    alt: "Featured project on a mobile phone",
  },
};

/** Display form of the URL for the browser address bar, e.g. "example.com". */
export function featuredHost(): string {
  return featured.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}
