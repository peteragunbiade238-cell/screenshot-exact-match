import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { socials } from "@/content/site";
import {
  serviceOptions,
  validateContact,
  type ContactErrors,
  type ContactValues,
} from "@/lib/contact-form";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { SELECT_SERVICE_EVENT } from "./Services";

const empty: ContactValues = { name: "", email: "", service: "", message: "" };

const fieldClass =
  "h-12 rounded-xl border-input bg-background/60 px-4 text-base placeholder:text-subtle focus-visible:border-primary focus-visible:ring-0";

export function Contact() {
  const [values, setValues] = useState<ContactValues>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const onSelect = (e: Event) => {
      const title = (e as CustomEvent<string>).detail;
      setValues((v) => ({ ...v, service: title }));
      setErrors((er) => ({ ...er, service: undefined }));
    };
    window.addEventListener(SELECT_SERVICE_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_SERVICE_EVENT, onSelect);
  }, []);

  const update = (key: keyof ContactValues, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    setChecked(false);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    if (Object.values(found).some(Boolean)) {
      const first = Object.keys(found)[0];
      document.getElementById(`contact-${first}`)?.focus();
      setChecked(false);
      return;
    }
    // No delivery service is connected yet, so nothing is sent.
    setChecked(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-24 md:py-36">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30 [mask-image:radial-gradient(ellipse_at_bottom_left,black_10%,transparent_60%)]" aria-hidden />
      <div className="container-page relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionLabel index="04">Contact</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-8 text-[clamp(2.5rem,5.5vw,4.75rem)]">
              Have a Project in Mind?{" "}
              <span className="accent-serif text-primary">Let's Make It Happen.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              Tell me about your business, your goals and the digital solution you're looking for.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-14">
              <p className="eyebrow">Find me on</p>
              <ul className="mt-4 border-t border-border">
                {socials.map((s) => (
                  <li key={s.label} className="border-b border-border">
                    {s.url ? (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between py-4 text-lg transition-colors hover:text-primary"
                      >
                        {s.label}
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ) : (
                      <div className="flex items-center justify-between py-4 text-lg text-muted-foreground">
                        {s.label}
                        <span className="font-mono text-xs text-subtle">Link coming soon</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-6">
          <form noValidate onSubmit={onSubmit} className="surface-card p-6 md:p-10" aria-describedby="form-status-note">
            <div
              id="form-status-note"
              className="mb-8 flex gap-3 rounded-xl border border-border bg-background/50 p-4 text-sm text-muted-foreground"
            >
              <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              <p>
                This form isn't connected to an inbox yet, so messages can't be delivered until
                sending is set up.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field id="name" label="Name" error={errors.name}>
                <Input
                  id="contact-name"
                  autoComplete="name"
                  placeholder="Your name"
                  value={values.name}
                  onChange={(e) => update("name", e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={fieldClass}
                />
              </Field>
              <Field id="email" label="Email" error={errors.email}>
                <Input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={values.email}
                  onChange={(e) => update("email", e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={fieldClass}
                />
              </Field>
            </div>

            <div className="mt-6">
              <Field id="service" label="Service required" error={errors.service}>
                <select
                  id="contact-service"
                  value={values.service}
                  onChange={(e) => update("service", e.target.value)}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? "contact-service-error" : undefined}
                  className={cn(
                    fieldClass,
                    "w-full appearance-none border bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10 outline-none",
                    !values.service && "text-subtle",
                  )}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='1.5'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                  }}
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  {serviceOptions.map((o) => (
                    <option key={o} value={o} className="bg-popover text-popover-foreground">
                      {o}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-6">
              <Field id="message" label="Project description" error={errors.message}>
                <Textarea
                  id="contact-message"
                  rows={6}
                  placeholder="What are you building, and what would success look like?"
                  value={values.message}
                  onChange={(e) => update("message", e.target.value)}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className={cn(fieldClass, "h-auto min-h-36 resize-y py-3")}
                />
              </Field>
            </div>

            <Button type="submit" variant="hero" size="xl" className="mt-8 w-full sm:w-auto">
              Send Message <ArrowUpRight />
            </Button>

            <div aria-live="polite">
              {checked && (
                <p className="mt-6 rounded-xl border border-primary/40 bg-primary-soft p-4 text-sm text-foreground">
                  Thanks — your details look good, but this message was <strong>not sent</strong>.
                  Form delivery hasn't been connected yet.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={`contact-${id}`} className="eyebrow">
        {label}
      </Label>
      {children}
      {error && (
        <p id={`contact-${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
