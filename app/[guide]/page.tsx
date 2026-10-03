import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLayout from "../../src/components/PageLayout";
import GuideCards from "../../src/components/GuideCards";
import { Download } from "lucide-react";
import { guideBySlug, guides } from "../../src/lib/guides";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "../../src/lib/seo";
import { absoluteUrl } from "../../src/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ guide: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ guide: string }>;
}): Promise<Metadata> {
  const guide = guideBySlug((await params).guide);
  if (!guide) return {};
  return pageMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/${guide.slug}`,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ guide: string }>;
}) {
  const guide = guideBySlug((await params).guide);
  if (!guide) notFound();

  const url = absoluteUrl(`/${guide.slug}`);
  const jsonLd = [
    breadcrumbJsonLd([{ name: guide.cardTitle, path: `/${guide.slug}` }]),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: guide.h1,
      description: guide.metaDescription,
      inLanguage: "en",
      isPartOf: { "@id": absoluteUrl("/#website") },
      about: { "@id": absoluteUrl("/#desktop-app") },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: guide.howToName,
      description: guide.intro,
      totalTime: "PT5M",
      tool: [
        { "@type": "HowToTool", name: "Pzync for Android" },
        { "@type": "HowToTool", name: "Pzync for Windows or Ubuntu" },
      ],
      step: guide.steps.map((text, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: text.split(/\s+/).slice(0, 8).join(" ").replace(/[.,:;]+$/, ""),
        text,
        url,
      })),
    },
    faqJsonLd(guide.faqs),
  ];

  return (
    <PageLayout
      eyebrow={guide.eyebrow}
      title={guide.h1}
      lead={guide.intro}
      jsonLd={jsonLd}
    >
      <div className="prose guide">
        <p>
          <a className="btn btn-primary" href="/#downloads">
            <Download size={16} /> Download Pzync
          </a>
        </p>

        <h2>What you need</h2>
        <table>
          <tbody>
            {guide.requirements.map(([k, v]) => (
              <tr key={k}>
                <th scope="row">{k}</th>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Steps</h2>
        <ol className="steps">
          {guide.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>

        {guide.sections.map((section) => (
          <div key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs?.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {section.list && (
              <ul>
                {section.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            )}
            {section.code && (
              <pre>
                <code>{section.code}</code>
              </pre>
            )}
          </div>
        ))}

        <h2>Frequently asked questions</h2>
        <div className="faq">
          {guide.faqs.map(({ q, a }) => (
            <details key={q}>
              <summary>{q}</summary>
              <div className="faq-answer">
                <p>{a}</p>
              </div>
            </details>
          ))}
        </div>

        <p>
          Need more detail? Read the full <a href="/docs">setup documentation</a>{" "}
          or visit <a href="/support">support</a>.
        </p>
      </div>

      <h2 className="guide-more">More guides</h2>
      <GuideCards exclude={guide.slug} />
    </PageLayout>
  );
}
