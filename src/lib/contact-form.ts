import { z } from "zod";
import { services } from "@/content/site";

export const serviceOptions = [...services.map((s) => s.title), "Something else"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email")
    .email("Please enter a valid email address")
    .max(255, "Email is too long"),
  service: z
    .string()
    .refine((v) => (serviceOptions as readonly string[]).includes(v), "Please choose a service"),
  message: z
    .string()
    .trim()
    .min(20, "Please share a little more detail (at least 20 characters)")
    .max(2000, "Please keep it under 2000 characters"),
});

export type ContactValues = z.infer<typeof contactSchema>;
export type ContactErrors = Partial<Record<keyof ContactValues, string | undefined>>;

export function validateContact(values: ContactValues): ContactErrors {
  const result = contactSchema.safeParse(values);
  if (result.success) return {};
  const errors: ContactErrors = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0] as keyof ContactValues;
    if (!errors[key]) errors[key] = issue.message;
  }
  return errors;
}
