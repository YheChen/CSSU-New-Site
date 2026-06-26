interface MailtoParams {
  to: string;
  subject: string;
  body: string;
}

/** Build a mailto: URL with encoded subject and body. */
export function buildMailto({ to, subject, body }: MailtoParams): string {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${to}?${params.toString().replace(/\+/g, "%20")}`;
}
