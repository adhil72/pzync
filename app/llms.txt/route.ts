import { guides } from "../../src/lib/guides";
import { SITE_FACTS, absoluteUrl } from "../../src/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# Pzync

> Pzync is a free, open-source app that connects an Android phone to an Ubuntu (Debian-based Linux) or Windows computer over the local network. It sends files, syncs the clipboard, streams PC audio to the phone, and uses the phone as a wireless webcam and microphone. No account and no cloud server is involved in transfers.

## Key facts
${SITE_FACTS.map((f) => `- ${f}`).join("\n")}

## Guides
${guides.map((g) => `- [${g.cardTitle}](${absoluteUrl(`/${g.slug}`)}): ${g.cardText}`).join("\n")}

## Reference
- [Home and downloads](${absoluteUrl("/")}): overview, features, FAQ, download links
- [Docs](${absoluteUrl("/docs")}): install, pairing, ports, webcam, microphone, screenshot sync
- [Support](${absoluteUrl("/support")}): troubleshooting and FAQ
- [Changelog](${absoluteUrl("/changelog")}): release notes
- [Privacy](${absoluteUrl("/privacy")}), [Terms](${absoluteUrl("/terms")}), [License](${absoluteUrl("/license")})
- [Contribute](${absoluteUrl("/contribute")}): build instructions and how to help

## Optional
- [Full content for language models](${absoluteUrl("/llms-full.txt")}): every guide and FAQ in one file
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
