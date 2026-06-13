/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C63FF',
          50: '#EDEDFF',
          100: '#D4D1FF',
          200: '#B9B3FF',
          300: '#9E95FF',
          400: '#8377FF',
          500: '#6C63FF',
          600: '#5440E8',
          700: '#3D1DD1',
          800: '#2600BA',
          900: '#1A0080',
        },
        accent: {
          DEFAULT: '#00D4AA',
          50: '#E6FFF8',
          100: '#B3FFED',
          200: '#80FFE2',
          300: '#4DFFD7',
          400: '#1AFFCC',
          500: '#00D4AA',
          600: '#00A888',
          700: '#007C66',
          800: '#005044',
          900: '#002422',
        },
        dark: {
          50: '#1a1a2e',
          100: '#16162a',
          200: '#121226',
          300: '#0e0e22',
          400: '#0a0a1e',
          500: '#06061a',
          600: '#020216',
          700: '#000012',
          800: '#00000e',
          900: '#00000a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(108, 99, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(108, 99, 255, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}