import type { Metadata } from "next";
import JsonLd from "../../src/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "../../src/lib/seo";
import PageLayout from "../../src/components/PageLayout";
import { DESKTOP_REPO, GITHUB_URL } from "../../src/lib/links";

export const metadata: Metadata = pageMetadata({
  title: "MIT License: Open Source Android to PC App",
  description:
    "Pzync is open source under the MIT License. Read the license and the third-party software notices for the Android, Windows and Ubuntu apps.",
  path: "/license",
});

const MIT_TEXT = `MIT License

Copyright (c) 2026 Adhil

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

export default function LicensePage() {
  return (
    <PageLayout
      jsonLd={breadcrumbJsonLd([{ name: "License", path: "/license" }])}
      eyebrow="Open source"
      title="MIT License"
      lead="Pzync is free and open source. You can use it, study it, change it and share it."
    >
      <div className="prose" style={{ maxWidth: 720 }}>
        <p>
          The Pzync Android app and desktop app are released under the MIT
          License. The source code is on{" "}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>,
          including the{" "}
          <a href={DESKTOP_REPO} target="_blank" rel="noopener noreferrer">desktop app</a>.
        </p>
      </div>
      <div className="license-box" style={{ marginTop: "2rem" }}>{MIT_TEXT}</div>
      <div className="prose" style={{ marginTop: "3rem" }}>
        <h2>Third-party software</h2>
        <p>
          Pzync is built on open-source software, including Tauri, React, Rust
          crates such as rustls, and Android Jetpack and Material components.
          Each is covered by its own license.
        </p>
        <p>
          The Windows desktop app includes the virtual camera module from{" "}
          <a href="https://obsproject.com" target="_blank" rel="noopener noreferrer">OBS Studio</a>,
          which is licensed separately under the GNU General Public License
          version 2. Its license and source are available from the OBS Studio
          project.
        </p>
      </div>
    </PageLayout>
  );
}
