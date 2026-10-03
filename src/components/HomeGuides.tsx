import GuideCards from "./GuideCards";

export default function HomeGuides() {
  return (
    <section id="guides" className="home-guides" aria-labelledby="guides-title">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Guides</p>
          <h2 className="section-title" id="guides-title">
            Step-by-step guides for<br />Android, Ubuntu and Windows.
          </h2>
        </div>
        <GuideCards />
      </div>
    </section>
  );
}
