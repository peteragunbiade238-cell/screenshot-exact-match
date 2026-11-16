/**
 * Content for the Featured section (heading and link on the left, project cards on the right).
 *
 * PLACEHOLDER: the link below is a stand-in while the layout is built.
 * Before publishing, replace `url` (and the card text) with your own featured project.
 * Leave `url` empty ("") to hide the link; the card then shows "Coming soon".
 */
export const featured = {
  eyebrow: "Featured project",
  description:
    "Selected work, from the featured website to concept builds. Pick a category to browse.",
  url: "https://dsquaredmedia.net/",
  linkLabel: "Visit live site",
  /** The first card: a drawn mockup of the website at `url`. */
  card: {
    title: "Featured Website",
    description:
      "A mockup of the featured website, with a link through to the live project.",
    tools: [] as string[],
  },
};

/** Display form of the URL for the mockup's address bar, e.g. "example.com". */
export function featuredHost(): string {
  return featured.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}
