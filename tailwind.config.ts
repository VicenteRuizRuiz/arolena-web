import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        arolena: {
          black: '#0a0a0a',
          ink: '#141414',
          surface: '#1a1a1a',
          line: '#2a2a2a',
          beige: '#e7dccd',
          cream: '#f5efe6',
          gold: '#c8a876',
          goldsoft: '#d8b988'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif']
      },
      container: {
        center: true,
        padding: { DEFAULT: '1rem', md: '2rem', lg: '3rem' }
      }
    }
  },
  plugins: []
};

export default config;
