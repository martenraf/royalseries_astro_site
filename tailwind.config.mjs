/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Work Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'oklch(var(--background) / <alpha-value>)',
        foreground: 'oklch(var(--foreground) / <alpha-value>)',
        card: 'oklch(var(--card) / <alpha-value>)',
        primary: 'oklch(var(--primary) / <alpha-value>)',
        accent: 'oklch(var(--accent) / <alpha-value>)',
        muted: 'oklch(var(--muted) / <alpha-value>)',
        border: 'oklch(var(--border) / <alpha-value>)',
      },
      borderRadius: { xl: 'var(--radius)' },
      boxShadow: { soft: '0 10px 30px rgba(0,0,0,.08)' }
    },
  },
  plugins: [],
};
