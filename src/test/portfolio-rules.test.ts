import { describe, expect, it } from "vitest";
import { filterProjects, projects } from "@/content/site";
import { validateContact } from "@/lib/contact-form";

const valid = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  service: "Website Design & Development",
  message: "I need a new website for my bakery with online ordering.",
};

describe("portfolio filters", () => {
  it("All shows every project", () => {
    expect(filterProjects(projects, "all")).toHaveLength(projects.length);
  });
  it("Websites shows only website projects", () => {
    const list = filterProjects(projects, "web");
    expect(list.length).toBeGreaterThan(0);
    expect(list.every((p) => p.category === "web")).toBe(true);
  });
});

describe("contact form validation", () => {
  it("accepts a complete form", () => {
    expect(validateContact(valid)).toEqual({});
  });
  it("requires a name", () => {
    expect(validateContact({ ...valid, name: "" }).name).toBeDefined();
  });
  it("rejects an invalid email", () => {
    expect(validateContact({ ...valid, email: "not-an-email" }).email).toBeDefined();
  });
  it("requires a service choice", () => {
    expect(validateContact({ ...valid, service: "" }).service).toBeDefined();
  });
  it("requires a project description", () => {
    expect(validateContact({ ...valid, message: "hi" }).message).toBeDefined();
  });
});
