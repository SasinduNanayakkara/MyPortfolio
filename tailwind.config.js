module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBtnColor: "var(--primary-btn-color)",
        primaryBtnHoverColor: "var(--primary-btn-hover-color)",
        secondaryBtnColor: "var(--secondary-btn-color)",
        secondaryBtnHoverColor: "var(--secondary-btn-hover-color)",
        secondaryBgColor: "var(--secondary-bg-color)",
        divBgColor: "var(--div-bg-color)",
        divSecondaryBgColor: "var(--div-secondary-bg-color)",
        transition : "var(--transition)",
      }
    },
  },
  plugins: [],
}
