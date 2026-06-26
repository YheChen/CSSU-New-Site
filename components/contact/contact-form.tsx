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

const topics = [
  "General inquiry",
  "Sponsorship",
  "Joining the team",
  "Feedback",
  "Other",
] as const;

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  topic: z.enum(topics),
  message: z.string().min(10, "Please write at least a few words."),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", topic: "General inquiry", message: "" },
  });

  const onSubmit = (values: ContactValues) => {
    const mailto = buildMailto({
      to: siteConfig.email,
      subject: `[${values.topic}] Message from ${values.name}`,
      body: `${values.message}\n\n— ${values.name}\n${values.email}`,
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
          Your email is ready to send
        </h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          We&apos;ve opened your mail app with the message pre-filled. If nothing
          happened, email us directly at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-accent underline-offset-4 hover:underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>
        <Button variant="subtle" size="sm" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name?.message}>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Ada Lovelace"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@mail.utoronto.ca"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </Field>
      </div>

      <Field label="Topic" htmlFor="topic" error={errors.topic?.message}>
        <Select id="topic" aria-invalid={!!errors.topic} {...register("topic")}>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Message" htmlFor="message" error={errors.message?.message}>
        <Textarea
          id="message"
          placeholder="How can we help?"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
      </Field>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        Send message
        <Send className="size-4" />
      </Button>
    </form>
  );
}
