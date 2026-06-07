import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Read version from desktop/src-tauri/tauri.conf.json
let tauriVersion = '0.2.1';
try {
  const tauriConfPath = path.resolve(__dirname, '../desktop/src-tauri/tauri.conf.json');
  const tauriConf = JSON.parse(fs.readFileSync(tauriConfPath, 'utf-8'));
  if (tauriConf && tauriConf.version) {
    tauriVersion = tauriConf.version;
  }
} catch (error) {
  console.warn('Failed to read tauri.conf.json, using default fallback.', error);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pzync/',
  define: {
    __TAURI_VERSION__: JSON.stringify(tauriVersion)
  }
})


