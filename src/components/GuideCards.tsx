import { ArrowUpRight } from "lucide-react";
import { guides } from "../lib/guides";

export default function GuideCards({ exclude }: { exclude?: string }) {
  return (
    <div className="doc-cards guide-cards">
      {guides
        .filter((g) => g.slug !== exclude)
        .map((g) => (
          <a key={g.slug} className="doc-card" href={`/${g.slug}`}>
            <ArrowUpRight size={20} />
            <strong>{g.cardTitle}</strong>
            <span>{g.cardText}</span>
          </a>
        ))}
    </div>
  );
}
