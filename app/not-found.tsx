import { CTAButton } from "@/components/ui/cta-button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-96 w-[700px] -translate-x-1/2 glow-accent" />
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-30" />
      </div>
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
        Error 404
      </p>
      <h1 className="mt-5 text-display font-semibold tracking-tight text-gradient">
        Page not found
      </h1>
      <p className="mt-5 max-w-md text-lg text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
        get you back on track.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <CTAButton href="/">Back to home</CTAButton>
        <CTAButton href="/resources" variant="outline" icon={null}>
          Browse resources
        </CTAButton>
      </div>
    </section>
  );
}
