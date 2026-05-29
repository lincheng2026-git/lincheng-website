import { FadeIn } from "./FadeIn";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <FadeIn className="mx-auto max-w-content px-5 pb-12 pt-28 text-center md:px-10 lg:px-20">
      {subtitle && (
        <p className="font-display text-sm tracking-[0.2em] text-warm-gray">{subtitle}</p>
      )}
      <h1 className="mt-2 font-serif text-4xl text-ink md:text-5xl">{title}</h1>
      {description && (
        <p className="mx-auto mt-6 max-w-xl font-fangsong text-lg leading-relaxed tracking-[0.1em] text-warm-gray">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
