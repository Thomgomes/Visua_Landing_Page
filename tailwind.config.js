/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#0E2A47",
      white: "#ffffff",
      black: "#000000",
      gray: "#8C8C8C",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      padding: {
        base_desktop: "72px",
        mid_desktop: "42px",
        base_mobile: "12px",
        mid_mobile: "16px",

        hero_space_desktop: "140px",
        hero_space_mobile: "100px",

        section_separator_desktop: "100px",
        section_separator_mobile: "50px",
      },
      margin: {
        base_desktop: "72px",
        mid_desktop: "42px",
        base_mobile: "12px",
        mid_mobile: "16px",

        hero_space_desktop: "140px",
        hero_space_mobile: "100px",

        section_separator_desktop: "100px",
        section_separator_mobile: "50px",
      },
      height: {
        img_desktop: "80px",
        img_mobile: "50px",
      },
      backgroundImage: {
        "svg-hero": "url('./src/assets/Bg_hero.svg')",
        "svg-about": "url('./src/assets/Bg_circle.svg')",
        "svg-about2": "url('./src/assets/Mask.svg')",
        "svg-desing": "url('./src/assets/Bg_m.svg')",
        "svg-end": "url('./src/assets/Bg_end.svg')",
      }
    },
  },
  plugins: [],
};
