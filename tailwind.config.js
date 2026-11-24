/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        infytel: {
          bg: '#070D1D',
          navy: '#0B132B',
          card: '#0D1630',
          cardBorder: 'rgba(255, 255, 255, 0.08)',
          red: '#EF4444',
          crimson: '#E11D48',
          rose: '#F43F5E',
          cyan: '#38BDF8',
          neonCyan: '#00D2FF',
          blueGlow: '#0EA5E9'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 30px -5px rgba(239, 68, 68, 0.45)',
        'glow-red-sm': '0 0 15px -3px rgba(239, 68, 68, 0.35)',
        'glow-cyan': '0 0 30px -5px rgba(56, 189, 248, 0.45)',
        'glow-cyan-sm': '0 0 15px -3px rgba(56, 189, 248, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
