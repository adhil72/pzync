import type { Metadata } from "next";
import JsonLd from "../../src/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "../../src/lib/seo";
import { Bug, Code2, Lightbulb } from "lucide-react";
import PageLayout from "../../src/components/PageLayout";
import { DESKTOP_ISSUES, DESKTOP_REPO, GITHUB_URL } from "../../src/lib/links";

export const metadata: Metadata = pageMetadata({
  title: "Contribute to the Open Source Android to PC App",
  description:
    "Help build Pzync: report bugs, suggest features, or send a pull request. Build instructions for the Android app and the Tauri desktop app.",
  path: "/contribute",
});

export default function ContributePage() {
  return (
    <PageLayout
      jsonLd={breadcrumbJsonLd([{ name: "Contribute", path: "/contribute" }])}
      eyebrow="Open source"
      title="Help build Pzync"
      lead="Pzync is made in the open. Bug reports, ideas, docs fixes and code are all welcome."
    >
      <div className="prose" style={{ maxWidth: 820 }}>
        <h2>Ways to help</h2>
      </div>
      <div className="doc-cards" style={{ marginTop: "1.5rem" }}>
        <a className="doc-card" href={DESKTOP_ISSUES} target="_blank" rel="noopener noreferrer">
          <Bug size={22} />
          <strong>Report a bug</strong>
          <span>Include your device, OS version, and the steps that led to the problem.</span>
        </a>
        <a className="doc-card" href={DESKTOP_ISSUES} target="_blank" rel="noopener noreferrer">
          <Lightbulb size={22} />
          <strong>Suggest a feature</strong>
          <span>Describe what you are trying to do on your phone and computer.</span>
        </a>
        <a className="doc-card" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          <Code2 size={22} />
          <strong>Send a pull request</strong>
          <span>Pick an issue or fix something you noticed. Keep changes focused.</span>
        </a>
      </div>

      <div className="prose" style={{ marginTop: "3rem" }}>
        <h2>Project layout</h2>
        <p>Pzync is two projects, each in its own repository:</p>
        <ul>
          <li><strong>Android app:</strong> Kotlin, with the <code>sols.sync</code> package, built with Gradle.</li>
          <li><strong>Desktop app:</strong> Tauri 2 with a React 19 and TypeScript front end and a Rust back end. Source: <a href={DESKTOP_REPO} target="_blank" rel="noopener noreferrer">pzynk/desktop</a>.</li>
        </ul>

        <h2>Build the desktop app</h2>
        <p>You need Node.js 18 or later and the Rust toolchain. See the Tauri prerequisites for your platform.</p>
        <pre><code>{`git clone ${DESKTOP_REPO}.git
cd desktop
npm install
npm run tauri dev`}</code></pre>
        <p>To check the Rust side:</p>
        <pre><code>{`cd src-tauri
cargo check
cargo test`}</code></pre>
        <p>On Linux you also need <code>scrot</code>, <code>xdotool</code>, <code>wmctrl</code> and <code>gnome-screenshot</code> or <code>flameshot</code>.</p>

        <h2>Build the Android app</h2>
        <p>You need JDK 11 or later and the Android SDK. Use the Gradle wrapper from the project folder:</p>
        <pre><code>{`./gradlew test
./gradlew assembleDebug`}</code></pre>
        <p>
          The Android app uses Firebase. To build it you need your own{" "}
          <code>google-services.json</code> in the <code>app/</code> module, with
          the package name <code>sols.sync</code>.
        </p>

        <h2>Sending a pull request</h2>
        <ol className="steps">
          <li>Open or find an issue so we agree on the change first.</li>
          <li>Fork the repository and create a branch for your change.</li>
          <li>Keep the change focused, match the surrounding code style, and add a test when the project has a place for it.</li>
          <li>Open the pull request and describe what changed and how you tested it.</li>
        </ol>

        <h2>Reporting a security problem</h2>
        <p>
          Pzync can run commands and capture the screen of a paired computer, so
          security reports matter. Please do not post vulnerabilities in a public
          issue. Use GitHub&apos;s private vulnerability reporting on the repository
          if it is available, or ask for a private channel in an issue without
          sharing the details.
        </p>
      </div>
    </PageLayout>
  );
}
