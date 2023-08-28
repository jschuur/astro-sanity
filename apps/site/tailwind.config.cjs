/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: {
          50: "rgb(var(--color-primary-50) / <alpha-value>)",
          100: "rgb(var(--color-primary-100) / <alpha-value>)",
          200: "rgb(var(--color-primary-200) / <alpha-value>)",
          300: "rgb(var(--color-primary-300) / <alpha-value>)",
          400: "rgb(var(--color-primary-400) / <alpha-value>)",
          500: "rgb(var(--color-primary-500) / <alpha-value>)",
          600: "rgb(var(--color-primary-600) / <alpha-value>)",
          700: "rgb(var(--color-primary-700) / <alpha-value>)",
          800: "rgb(var(--color-primary-800) / <alpha-value>)",
          900: "rgb(var(--color-primary-900) / <alpha-value>)",
          main: "rgb(var(--color-primary-main) / <alpha-value>)",
        },
      },
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          a: {
            "text-underline-offset": "8px",
            "text-decoration-line": "underline",
            "&:hover": {
              color: theme("colors.orange.500"),
            },
          },
        },
      },
    }),
    fontFamily: {
      header: ["Anybody", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
