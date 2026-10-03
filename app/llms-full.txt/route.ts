import { guides } from "../../src/lib/guides";
import { homeFaqs, supportFaqs } from "../../src/lib/faqs";
import { SITE_FACTS, SITE_DESCRIPTION, absoluteUrl } from "../../src/lib/site";

export const dynamic = "force-static";

const faqBlock = (faqs: { q: string; a: string }[]) =>
  faqs.map(({ q, a }) => `### ${q}\n${a}`).join("\n\n");

export function GET() {
  const guideBlocks = guides.map((g) => {
    const sections = g.sections
      .map((s) => {
        const parts = [`### ${s.title}`];
        if (s.paragraphs) parts.push(s.paragraphs.join("\n\n"));
        if (s.list) parts.push(s.list.map((l) => `- ${l}`).join("\n"));
        if (s.code) parts.push("```\n" + s.code + "\n```");
        return parts.join("\n\n");
      })
      .join("\n\n");
    return `## ${g.h1}
Page: ${absoluteUrl(`/${g.slug}`)}

${g.intro}

### What you need
${g.requirements.map(([k, v]) => `- ${k}: ${v}`).join("\n")}

### Steps
${g.steps.map((s, i) => `${i + 1}. ${s}`).join("\n")}

${sections}

### Frequently asked questions
${g.faqs.map(({ q, a }) => `**${q}**\n${a}`).join("\n\n")}`;
  });

  const body = `# Pzync: full content

> ${SITE_DESCRIPTION}

Website: ${absoluteUrl("/")}
Source code: https://github.com/pzynk

## Key facts
${SITE_FACTS.map((f) => `- ${f}`).join("\n")}

## Features
- Send files between Android and a computer with live speed, pause and resume, and SHA-256 verification
- Universal clipboard in both directions, plus optional sync of new phone screenshots to the desktop clipboard
- Stream the computer's system audio to the phone
- Use the phone as a wireless webcam (virtual camera) and as a wireless microphone (virtual input device)
- View and control desktop media playback and master volume from the phone
- Run commands and capture the screen of a paired computer from the phone
- Android Share menu and Quick Settings clipboard tile
- Desktop app runs from the system tray, can start with the computer, and updates itself

${guideBlocks.join("\n\n---\n\n")}

---

## Frequently asked questions (home page)
${faqBlock(homeFaqs)}

---

## Support questions
${faqBlock(supportFaqs)}

---

## Setup documentation
See ${absoluteUrl("/docs")} for installation, pairing, firewall ports (UDP 8200, TCP 8080), webcam, microphone, screenshot sync and remote terminal setup.

## Privacy
See ${absoluteUrl("/privacy")}. Files, clipboard, audio, camera and terminal data go directly between paired devices over the local network and never to a server operated by Pzync. The Android app sends anonymous usage analytics through Google Firebase.

## License
MIT. See ${absoluteUrl("/license")}.
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
