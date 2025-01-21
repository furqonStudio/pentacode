/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
      fontSize: {
        // Desktop
        'heading-1': ['67px', '120%'],
        'heading-2': ['50px', '120%'],
        'heading-3': ['38px', '120%'],
        'heading-4': ['28px', '120%'],
        'heading-5': ['21px', '120%'],
        'heading-6': ['16px', '120%'],
        subtitle: ['18px', '140%'],
        body: ['16px', '160%'],
        button: ['16px', '100%'],
        link: ['16px', '120%'],
        overline: ['14px', '120%'],
        caption: ['14px', '120%'],
        'caption-sm': ['12px', '100%'],

        // Mobile
        'sm-heading-1': ['40px', '120%'],
        'sm-heading-2': ['34px', '120%'],
        'sm-heading-3': ['26px', '120%'],
        'sm-heading-4': ['22px', '120%'],
        'sm-heading-5': ['18px', '120%'],
        'sm-heading-6': ['16px', '100%'],
        'sm-subtitle': ['18px', '140%'],
        'sm-body': ['16px', '140%'],
        'sm-button': ['14px', '100%'],
        'sm-link': ['14px', '120%'],
        'sm-overline': ['12px', '120%'],
        'sm-caption': ['14px', '120%'],
        'sm-caption-sm': ['12px', '120%'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        black: 900,
      },
    },
  },
  plugins: [],
}
