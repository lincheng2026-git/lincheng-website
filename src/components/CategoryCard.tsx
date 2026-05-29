import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  href: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export function CategoryCard({
  href,
  title,
  subtitle,
  description,
  image,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative block aspect-[4/3] overflow-hidden rounded-lg shadow-card"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent transition-colors duration-300 group-hover:from-ink/80" />
      <div className="absolute inset-0 rounded-lg border border-transparent transition-colors duration-300 group-hover:border-warm-white/30" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-warm-white">
        <p className="font-display text-xs tracking-widest opacity-80">{subtitle}</p>
        <h3 className="mt-1 font-serif text-2xl">{title}</h3>
        <p className="mt-2 text-sm opacity-90">{description}</p>
        <span className="mt-3 inline-block text-sm tracking-wide opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          进入 →
        </span>
      </div>
    </Link>
  );
}
