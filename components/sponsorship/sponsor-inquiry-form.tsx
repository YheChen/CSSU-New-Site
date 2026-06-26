"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/input";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { buildMailto } from "@/lib/mailto";
import { siteConfig } from "@/data/site";

const tiers = ["Bronze", "Silver", "Gold", "Platinum", "Custom partnership"] as const;

const inquirySchema = z.object({
  organization: z.string().min(2, "Please enter your organization name."),
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  tier: z.enum(tiers),
  message: z.string().min(10, "Tell us a little about your goals."),
});

type InquiryValues = z.infer<typeof inquirySchema>;

export function SponsorInquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      organization: "",
      name: "",
      email: "",
      tier: "Gold",
      message: "",
    },
  });

  const onSubmit = (values: InquiryValues) => {
    const mailto = buildMailto({
      to: siteConfig.executiveEmail,
      subject: `Sponsorship inquiry — ${values.organization} (${values.tier})`,
      body: `Organization: ${values.organization}\nContact: ${values.name}\nEmail: ${values.email}\nInterested tier: ${values.tier}\n\n${values.message}`,
    });
    window.location.href = mailto;
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-accent/30 bg-accent/[0.06] p-10 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="text-xl font-semibold text-foreground">
          Thanks for reaching out
        </h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Your inquiry email is ready to send. If your mail app didn&apos;t open,
          contact us directly at{" "}
          <a
            href={`mailto:${siteConfig.executiveEmail}`}
            className="text-accent underline-offset-4 hover:underline"
          >
            {siteConfig.executiveEmail}
          </a>
          .
        </p>
        <Button variant="subtle" size="sm" onClick={() => setSubmitted(false)}>
          Submit another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Organization"
          htmlFor="organization"
          error={errors.organization?.message}
        >
          <Input
            id="organization"
            placeholder="Acme Inc."
            aria-invalid={!!errors.organization}
            {...register("organization")}
          />
        </Field>
        <Field label="Your name" htmlFor="name" error={errors.name?.message}>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Grace Hopper"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" htmlFor="email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="partnerships@acme.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </Field>
        <Field label="Interested tier" htmlFor="tier" error={errors.tier?.message}>
          <Select id="tier" aria-invalid={!!errors.tier} {...register("tier")}>
            {tiers.map((tier) => (
              <option key={tier} value={tier}>
                {tier}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message" error={errors.message?.message}>
        <Textarea
          id="message"
          placeholder="What are you hoping to achieve by partnering with the CSSU?"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
      </Field>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        Send inquiry
        <Send className="size-4" />
      </Button>
    </form>
  );
}
