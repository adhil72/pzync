import type { Metadata } from "next";
import PageLayout from "../src/components/PageLayout";
import GuideCards from "../src/components/GuideCards";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageLayout
      eyebrow="404"
      title="That page does not exist"
      lead="It may have moved. Try one of these guides, or head back to the home page."
    >
      <GuideCards />
      <p className="doc-lead" style={{ marginTop: "2rem" }}>
        <a href="/" style={{ color: "var(--text-main)" }}>Back to the home page</a>
      </p>
    </PageLayout>
  );
}
