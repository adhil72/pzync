import type { Metadata } from "next";
import JsonLd from "../../src/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "../../src/lib/seo";
import PageLayout from "../../src/components/PageLayout";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "Plain-language terms for using Pzync, the free and open-source Android to Windows and Ubuntu connection app.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageLayout
      jsonLd={breadcrumbJsonLd([{ name: "Terms of Use", path: "/terms" }])}
      eyebrow="Legal"
      title="Terms of Use"
      lead="Pzync is free, open-source software. These terms are short and plain."
      updated="October 3, 2026"
    >
      <div className="prose">
        <h2>1. Using Pzync</h2>
        <p>
          You may use Pzync for personal or commercial purposes, under the terms
          of the <a href="/license">MIT License</a>. Pzync is intended for
          connecting devices you own or are allowed to use.
        </p>

        <h2>2. No warranty</h2>
        <p>
          Pzync is provided &quot;as is&quot;, without warranty of any kind. We do not
          promise that it will be free of errors or always available, or that it
          will work with every device and network.
        </p>

        <h2>3. Your responsibility</h2>
        <ul>
          <li>Only pair devices you own or trust. A paired phone can send files, read and write your clipboard and, if you use that feature, run commands on your computer.</li>
          <li>Use Pzync only on networks you trust.</li>
          <li>You are responsible for the files and content you send, and for following the laws that apply to you.</li>
          <li>Keep backups of anything important. We are not responsible for lost or corrupted data.</li>
        </ul>

        <h2>4. Limit of liability</h2>
        <p>
          To the extent the law allows, the authors and contributors are not
          liable for any damages that come from using Pzync or this website.
        </p>

        <h2>5. Privacy</h2>
        <p>
          How data is handled is explained in the <a href="/privacy">Privacy Policy</a>.
        </p>

        <h2>6. Changes</h2>
        <p>
          We may update these terms. The current version is always on this page
          with its &quot;Last updated&quot; date.
        </p>
      </div>
    </PageLayout>
  );
}
