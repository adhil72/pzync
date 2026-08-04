import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Features from '../src/components/Features';
import Downloads from '../src/components/Downloads';
import Footer from '../src/components/Footer';

async function getLatestVersion() {
  try {
    const res = await fetch('https://api.github.com/repos/pzynk/desktop/releases/latest', { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error('Network response was not ok');
    const data = await res.json();
    if (data && data.tag_name) {
      let rawVersion = data.tag_name;
      if (rawVersion.startsWith('v')) {
        rawVersion = rawVersion.substring(1);
      }
      return rawVersion;
    }
  } catch (error) {
    console.error('Failed to fetch latest version from GitHub:', error);
  }
  return '0.2.1'; // fallback version
}

export default async function Page() {
  const version = await getLatestVersion();
  const displayVersion = `v${version}`;
  const DEB_URL = `https://github.com/pzynk/desktop/releases/download/${displayVersion}/Pzync_${version}_amd64.deb`;
  const EXE_URL = `https://github.com/pzynk/desktop/releases/download/${displayVersion}/Pzync_${version}_x64-setup.exe`;

  return (
    <>
      <Navbar />
      <Hero displayVersion={displayVersion} />
      <Features />
      <Downloads debUrl={DEB_URL} exeUrl={EXE_URL} />
      <Footer />
    </>
  );
}
