/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  plugins: [require('@tailwindcss/typography')],
}
