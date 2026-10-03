import { homeFaqs } from "../lib/faqs";

export default function HomeFaq() {
  return (
    <section id="faq" className="home-faq" aria-labelledby="faq-title">
      <div className="container home-faq-grid">
        <div className="home-faq-intro">
          <div className="section-header">
            <p className="section-eyebrow">Questions</p>
            <h2 className="section-title" id="faq-title">
              Connecting Android to Windows or Ubuntu, answered.
            </h2>
          </div>
          <p className="faq-help">
            Quick answers to the most common questions. Need setup steps or
            troubleshooting? Start here.
          </p>
          <div className="home-faq-links">
            <a href="/docs" className="btn btn-primary">Read the setup guide</a>
            <a href="/support" className="btn btn-outline">Get help</a>
          </div>
        </div>

        <div className="faq">
          {homeFaqs.map(({ q, a }, i) => (
            <details key={q} open={i === 0}>
              <summary>{q}</summary>
              <div className="faq-answer"><p>{a}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
