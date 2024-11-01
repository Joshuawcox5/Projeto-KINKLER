module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        backgrounds: { primary: "var(--backgrounds_primary)" },
        black: { 900: "var(--black_900)", "900_3f": "var(--black_900_3f)" },
        blue_gray: { 100: "var(--blue_gray_100)", 900: "var(--blue_gray_900)", "900_01": "var(--blue_gray_900_01)" },
        deep_purple: { 500: "var(--deep_purple_500)", 800: "var(--deep_purple_800)" },
        gray: {
          200: "var(--gray_200)",
          300: "var(--gray_300)",
          400: "var(--gray_400)",
          500: "var(--gray_500)",
          600: "var(--gray_600)",
          700: "var(--gray_700)",
          800: "var(--gray_800)",
          900: "var(--gray_900)",
          "100_01": "var(--gray_100_01)",
          "200_01": "var(--gray_200_01)",
          "500_01": "var(--gray_500_01)",
          "600_01": "var(--gray_600_01)",
          "900_01": "var(--gray_900_01)",
          "900_02": "var(--gray_900_02)",
          "900_03": "var(--gray_900_03)",
          "900_04": "var(--gray_900_04)",
          "900_05": "var(--gray_900_05)",
          "900_06": "var(--gray_900_06)",
          "900_07": "var(--gray_900_07)",
          "900_08": "var(--gray_900_08)",
          "900_09": "var(--gray_900_09)",
          "900_10": "var(--gray_900_10)",
          "900_11": "var(--gray_900_11)",
          "900_12": "var(--gray_900_12)",
          "900_13": "var(--gray_900_13)"
        }
      },
      boxShadow: { xs: "0px 4px 4px 0px #0000003f" },
      fontFamily: { inter: "Inter" }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
