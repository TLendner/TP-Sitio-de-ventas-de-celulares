export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35', // Naranja principal
        dark: '#121212',    // Fondo oscuro
        light: '#F8F9FA',   // Texto claro
        accent: '#FF9E1F',  // Naranja secundario
        gray: {
          800: '#1E1E1E',   // Fondos oscuros
          700: '#2D2D2D',   // Bordes
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        title: ['"Bebas Neue"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      }
    },
  },
  plugins: [],
}