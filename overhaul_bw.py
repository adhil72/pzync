import re

with open('/home/adhil/projects/sync/pzync/src/index.css', 'r') as f:
    css = f.read()

# 1. Update variables and body
css = re.sub(
    r':root \{.*?\n\}',
    ''':root {
  --bg: #000000;
  --bg-secondary: #0a0a0a;
  --bg-surface: rgba(15, 15, 15, 0.6);
  --bg-hover: rgba(25, 25, 25, 0.8);
  
  --text-main: #ffffff;
  --text-muted: #888888;
  --text-dim: #444444;
  
  --border: #222222;
  --border-hover: #444444;

  --accent: #ffffff;
  --gradient-bg: none;
  
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: 'Outfit', var(--font-sans);
  
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  
  --transition-fast: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'body \{.*?\}',
    '''body {
  background-color: var(--bg);
  color: var(--text-main);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  line-height: 1.5;
}''',
    css,
    flags=re.DOTALL
)

# 2. Nav
css = re.sub(
    r'\.nav \{.*?\}',
    '''.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}''',
    css,
    flags=re.DOTALL
)

# 3. Buttons
css = re.sub(
    r'\.btn-primary \{.*?\}',
    '''.btn-primary {
  background: var(--text-main);
  color: var(--bg);
  border: 1px solid var(--text-main);
  box-shadow: 0 4px 14px 0 rgba(255, 255, 255, 0.1);
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.btn-primary:hover \{.*?\}',
    '''.btn-primary:hover {
  background: #e0e0e0;
  color: var(--bg);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.btn-outline \{.*?\}',
    '''.btn-outline {
  background: transparent;
  color: var(--text-main);
  border: 1px solid var(--border);
  backdrop-filter: blur(8px);
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.btn-outline:hover \{.*?\}',
    '''.btn-outline:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--text-main);
  transform: translateY(-2px);
}''',
    css,
    flags=re.DOTALL
)

# 4. Hero & Badges
css = re.sub(
    r'\.badge \{.*?\}',
    '''.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 1rem;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.hero-headline \{.*?\}',
    '''.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(3rem, 5vw, 5.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.04em;
  margin-bottom: 1rem;
  color: var(--text-main);
}''',
    css,
    flags=re.DOTALL
)

# 5. Phone & Visuals
css = re.sub(
    r'\.phone-shell \{.*?\}',
    '''.phone-shell {
  background: rgba(10, 10, 10, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 36px;
  padding: 8px;
  border: 1px solid var(--border);
  box-shadow: 0 25px 50px -12px rgba(255, 255, 255, 0.05);
  position: relative;
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.phone-notch \{.*?\}',
    '''.phone-notch {
  width: 120px;
  height: 24px;
  background: #000000;
  border-radius: 0 0 12px 12px;
  margin: 0 auto 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5);
  border: 1px solid var(--border);
  border-top: none;
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.phone-screen img \{.*?\}',
    '''.phone-screen img {
  width: 100%;
  display: block;
  filter: grayscale(100%) contrast(1.1);
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.stat-chip \{.*?\}',
    '''.stat-chip {
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-main);
  z-index: 10;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
  transition: var(--transition-fast);
}
.stat-chip:hover {
  transform: translateY(-2px) scale(1.05);
}''',
    css,
    flags=re.DOTALL
)

# 6. Typography & Cards
css = re.sub(
    r'\.section-title \{.*?\}',
    '''.section-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--text-main);
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.section-eyebrow \{.*?\}',
    '''.section-eyebrow {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.dc-badge \{.*?\}',
    '''.dc-badge {
  padding: 0.3rem 0.8rem;
  background: var(--border);
  color: var(--text-main);
  border: 1px solid var(--border-hover);
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 20px;
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.bento-icon \{.*?\}',
    '''.bento-icon {
  width: 48px;
  height: 48px;
  border: 1px solid var(--border);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  background: transparent;
  color: var(--text-main);
}''',
    css,
    flags=re.DOTALL
)

# 7. Remove the dynamic glow effect
css = re.sub(r'/\* Dynamic Glow Effect \*/.*?(?=/\*|$)', '', css, flags=re.DOTALL)

with open('/home/adhil/projects/sync/pzync/src/index.css', 'w') as f:
    f.write(css)

print("CSS updated to monochrome.")
