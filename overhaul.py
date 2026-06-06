import re

with open('/home/adhil/projects/sync/pzync/src/index.css', 'r') as f:
    css = f.read()

# 1. Update variables and body
css = re.sub(
    r':root \{.*?\n\}',
    ''':root {
  --bg: #030712;
  --bg-secondary: #0f172a;
  --bg-surface: rgba(30, 41, 59, 0.4);
  --bg-hover: rgba(51, 65, 85, 0.4);
  
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --text-dim: #475569;
  
  --border: rgba(255, 255, 255, 0.1);
  --border-hover: rgba(255, 255, 255, 0.2);

  --accent: #3b82f6;
  --gradient-accent: linear-gradient(135deg, #2563eb, #8b5cf6);
  --gradient-bg: radial-gradient(circle at 15% 50%, rgba(37, 99, 235, 0.15), transparent 50%),
                 radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.15), transparent 50%);
  
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: 'Outfit', var(--font-sans);
  
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  
  --transition-fast: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'body \{.*?\}',
    '''body {
  background-color: var(--bg);
  background-image: var(--gradient-bg);
  background-attachment: fixed;
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

# 2. Update Nav
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
  background: rgba(3, 7, 18, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.logo-container \{.*?\}',
    '''.logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-main);
  cursor: pointer;
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.nav-links a \{.*?\}',
    '''.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: var(--transition-fast);
}''',
    css,
    flags=re.DOTALL
)

# 3. Buttons
css = re.sub(
    r'\.btn \{.*?\}',
    '''.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.4rem;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition-fast);
  border: 1px solid transparent;
  gap: 0.5rem;
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.btn-primary \{.*?\}',
    '''.btn-primary {
  background: var(--gradient-accent);
  color: #fff;
  border: none;
  box-shadow: 0 4px 14px 0 rgba(37, 99, 235, 0.3);
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.btn-primary:hover \{.*?\}',
    '''.btn-primary:hover {
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
  transform: translateY(-2px);
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.btn-outline \{.*?\}',
    '''.btn-outline {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-main);
  border-color: var(--border);
  backdrop-filter: blur(8px);
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.btn-outline:hover \{.*?\}',
    '''.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--border-hover);
  transform: translateY(-2px);
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.btn-ghost \{.*?\}',
    '''.btn-ghost {
  color: var(--text-muted);
  background: transparent;
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.btn-ghost:hover \{.*?\}',
    '''.btn-ghost:hover {
  color: var(--text-main);
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
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #60a5fa;
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
  background: linear-gradient(to right, #ffffff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.hero-sub \{.*?\}',
    '''.hero-sub {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 90%;
}''',
    css,
    flags=re.DOTALL
)

# 5. Phone & Visuals
css = re.sub(
    r'\.phone-shell \{.*?\}',
    '''.phone-shell {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 36px;
  padding: 8px;
  border: 1px solid var(--border);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
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
  background: #0f172a;
  border-radius: 0 0 12px 12px;
  margin: 0 auto 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.phone-screen img \{.*?\}',
    '''.phone-screen img {
  width: 100%;
  display: block;
  /* Removed grayscale to look vibrant */
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.phone-screen \{.*?\}',
    '''.phone-screen {
  border-radius: 28px;
  overflow: hidden;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  position: relative;
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.stat-chip \{.*?\}',
    '''.stat-chip {
  position: absolute;
  background: rgba(15, 23, 42, 0.7);
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
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
  transition: var(--transition-fast);
}
.stat-chip:hover {
  transform: translateY(-2px) scale(1.05);
}''',
    css,
    flags=re.DOTALL
)

# 6. Bento Grid & Downloads
css = re.sub(
    r'\.bento-card \{.*?\}',
    '''.bento-card {
  background: var(--bg-surface);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  transition: var(--transition-fast);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.bento-card:hover \{.*?\}',
    '''.bento-card:hover {
  border-color: var(--border-hover);
  background: var(--bg-hover);
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.section-title \{.*?\}',
    '''.section-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  background: linear-gradient(to right, #ffffff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.section-eyebrow \{.*?\}',
    '''.section-eyebrow {
  font-size: 0.9rem;
  font-weight: 700;
  color: #60a5fa;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.download-card \{.*?\}',
    '''.download-card {
  background: var(--bg-surface);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  transition: var(--transition-fast);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.download-card:hover \{.*?\}',
    '''.download-card:hover {
  border-color: var(--border-hover);
  background: var(--bg-hover);
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.dc-badge \{.*?\}',
    '''.dc-badge {
  padding: 0.3rem 0.8rem;
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.2);
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 20px;
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.bento-card h3 \{.*?\}',
    '''.bento-card h3 {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.bento-icon \{.*?\}',
    '''.bento-icon {
  width: 48px;
  height: 48px;
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
}''',
    css,
    flags=re.DOTALL
)

css = re.sub(
    r'\.bento-card p \{.*?\}',
    '''.bento-card p {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.6;
}''',
    css,
    flags=re.DOTALL
)

# 7. Add micro-animations & glow
css += '''
/* Dynamic Glow Effect */
.bento-card, .download-card {
  position: relative;
  overflow: hidden;
}
.bento-card::before, .download-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  transform: skewX(-20deg);
  transition: all 0.5s ease;
}
.bento-card:hover::before, .download-card:hover::before {
  left: 150%;
}
'''

with open('/home/adhil/projects/sync/pzync/src/index.css', 'w') as f:
    f.write(css)

print("CSS updated successfully.")
