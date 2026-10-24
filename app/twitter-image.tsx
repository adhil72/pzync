import { ogSize, renderOgImage } from "../src/lib/og";

export const alt = "SockLink: connect Android to Ubuntu and Windows";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage();
}
