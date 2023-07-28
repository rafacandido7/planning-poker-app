/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: '#23232e',
        primary: '#f3f6f9',
        prim: '#78C1F3',
        secondary: '#9BE8D8',
        terciary: '#E2F6CA',
        optional: '#F8FDCF',
      }
    },
  },
  plugins: [],
}
