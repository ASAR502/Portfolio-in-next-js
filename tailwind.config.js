/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        custom: "1fr auto",
        custom_2: "auto 1fr",
      },
      // Blog_Styles
      fontFamily: {
        portfolio_normal: ["Light", "sans-serif"],
        portfolio_bold: ["Medium", "sans-serif"],
        portfolio_regular: ["Regular", "sans-serif"],
      },
      colors: {
        light_grey: "#eee",
      },
      maxWidth: {
        custom: "1184px",
      },
    },
  },
  plugins: [],
};

