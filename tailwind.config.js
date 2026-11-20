export default {
  content: ['./index.html', './src/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans Variable"', 'sans-serif'],
      },
      colors: {
        obsidian: {
          900: '#11131C',
          800: '#161926',
          700: '#1F2436',
          600: '#2B3147',
        },
        heroIndigo: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          900: '#1E1B4B',
        },
        heroAmber: {
          50: '#FEF3C7',
          100: '#FDE68A',
          500: '#F59E0B',
          600: '#D97706',
        },
        alabaster: '#F3F4F8',
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '24px',
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(17, 19, 28, 0.05), 0 2px 6px -1px rgba(17, 19, 28, 0.03)',
        'card-hover': '0 12px 32px -4px rgba(79, 70, 229, 0.12), 0 4px 12px -2px rgba(17, 19, 28, 0.06)',
        'glow-indigo': '0 0 24px rgba(79, 70, 229, 0.35)',
      },
    },
  },
};
