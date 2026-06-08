import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Downloads from './components/Downloads';
import Footer from './components/Footer';
import './index.css';

declare const __TAURI_VERSION__: string;

function App() {
  const [version, setVersion] = useState(() => {
    return typeof __TAURI_VERSION__ !== 'undefined' ? __TAURI_VERSION__ : '0.2.1';
  });

  useEffect(() => {
    fetch('https://api.github.com/repos/pzynk/desktop/releases/latest')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        if (data && data.tag_name) {
          let rawVersion = data.tag_name;
          if (rawVersion.startsWith('v')) {
            rawVersion = rawVersion.substring(1);
          }
          setVersion(rawVersion);
        }
      })
      .catch((error) => {
        console.error('Failed to fetch latest version from GitHub:', error);
      });
  }, []);

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

export default App;
