import type { Metadata } from "next";
import JsonLd from "../../src/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "../../src/lib/seo";
import type { ReactNode } from "react";
import PageLayout from "../../src/components/PageLayout";
import { RELEASES_URL } from "../../src/lib/links";

export const metadata: Metadata = pageMetadata({
  title: "Changelog and Release Notes",
  description:
    "Every release of the Pzync desktop app for Windows and Ubuntu, newest first, with release notes from GitHub.",
  path: "/changelog",
});

interface Release {
  id: number;
  tag_name: string;
  name: string | null;
  body: string | null;
  html_url: string;
  published_at: string | null;
  draft: boolean;
  prerelease: boolean;
}

async function getReleases(): Promise<Release[] | null> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/pzynk/desktop/releases?per_page=15",
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) throw new Error("GitHub responded with " + res.status);
    const data: Release[] = await res.json();
    return data.filter((r) => !r.draft);
  } catch (error) {
    console.error("Failed to fetch releases from GitHub:", error);
    return null;
  }
}

function renderBody(body: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let items: string[] = [];
  const flush = (key: string) => {
    if (items.length) {
      nodes.push(
        <ul key={key}>
          {items.map((t, i) => <li key={i}>{t}</li>)}
        </ul>,
      );
      items = [];
    }
  };
  body.split(/\r?\n/).forEach((raw, i) => {
    const line = raw.trim();
    const bullet = line.match(/^[-*]\s+(.*)/);
    const heading = line.match(/^#{1,6}\s+(.*)/);
    if (bullet) {
      items.push(bullet[1]);
      return;
    }
    flush(`ul-${i}`);
    if (heading) nodes.push(<h3 key={i}>{heading[1]}</h3>);
    else if (line) nodes.push(<p key={i}>{line}</p>);
  });
  flush("ul-end");
  return nodes;
}

function formatDate(iso: string | null) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function ChangelogPage() {
  const releases = await getReleases();

  return (
    <PageLayout
      jsonLd={breadcrumbJsonLd([{ name: "Changelog", path: "/changelog" }])}
      eyebrow="Changelog"
      title="What's new"
      lead="Every release of the Pzync desktop app, newest first."
    >
      {releases && releases.length > 0 ? (
        <div className="release-list">
          {releases.map((r) => (
            <article className="release" key={r.id}>
              <div className="release-meta">
                <h2>{r.tag_name}</h2>
                {r.published_at && <time dateTime={r.published_at}>{formatDate(r.published_at)}</time>}
                {r.prerelease && <time>Pre-release</time>}
                <a href={r.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </div>
              <div className="release-body">
                {r.body && r.body.trim() ? renderBody(r.body) : <p>No release notes were written for this version.</p>}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="prose">
          <p>
            We could not load the release list right now. You can read every
            release directly on{" "}
            <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>
        </div>
      )}
    </PageLayout>
  );
}
