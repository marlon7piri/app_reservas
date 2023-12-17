/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      theme: {
        colors: {
          // Using modern `rgb`
          secundario:" #2bc2e5",
          terceario: "rgba(var(bue-oscuro-fuerte) / <alpha-value>)",
          primario: "#2bc2e5",
        },
      },
    },
  },
  plugins: [],
};
