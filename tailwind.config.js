import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        gradientCustom:
          'linear-gradient(to bottom, #2A324B 0.45%, #48BEFF 199.14%)'
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    styled: true,
    themes: [],
    base: true,
    utils: true,
    logs: true,
    rtl: false
  }
};
