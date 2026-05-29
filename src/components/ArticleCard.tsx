import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

interface ArticleCardProps {
  href: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  cover: string;
}

export function ArticleCard({
  href,
  title,
  excerpt,
  category,
  date,
  cover,
}: ArticleCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg bg-warm-white shadow-card transition-all duration-250 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover transition-transform duration-250 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <span className="inline-block rounded bg-tag px-2.5 py-0.5 text-xs text-tea">
          {category}
        </span>
        <h3 className="mt-3 line-clamp-2 font-serif text-base text-ink">{title}</h3>
        <time className="mt-2 block text-xs text-warm-gray">{formatDate(date)}</time>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-warm-gray">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}
