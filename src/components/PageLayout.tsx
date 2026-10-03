import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import JsonLd from "./JsonLd";

interface PageLayoutProps {
  eyebrow: string;
  title: string;
  lead?: string;
  updated?: string;
  jsonLd?: object | object[];
  children: ReactNode;
}

export default function PageLayout({ eyebrow, title, lead, updated, jsonLd, children }: PageLayoutProps) {
  return (
    <>
      {jsonLd && <JsonLd data={jsonLd} />}
      <Navbar />
      <main id="main" className="doc-page">
        <header className="doc-header container">
          <p className="section-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {lead && <p className="doc-lead">{lead}</p>}
          {updated && <p className="doc-updated">Last updated {updated}</p>}
        </header>
        <div className="doc-body container">{children}</div>
      </main>
      <Footer />
    </>
  );
}
