/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          red: " hsl(0, 100%, 67%)",
          yellow: " hsl(39, 100%, 56%)",
          teal: " hsl(166, 100%, 37%)",
          blue: "hsl(234, 85%, 45%)",
        },
        gridiants: {
          background: {
            100: "hsl(252, 100%, 67%)",
            200: "hsl(241, 81%, 54%)",
          },
          circle: {
            100: "hsla(256, 72%, 46%, 1)",
            200: "hsla(241, 72%, 46%, 0)",
          },
        },
        neutral: {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(221, 100%, 96%)",
          300: "hsl(241, 100%, 89%)",
          400: "hsl(224, 30%, 27%)",
        },
      },
      gridTemplateRows: {
        "6-auto": "repeat(6, minmax(0, auto))",
        "5-auto": "repeat(5, minmax(0, auto))",
        "auto-1fr-auto": "auto 1fr auto",
      },
      gridTemplateColumns: {
        "2-auto": "repeat(2, minmax(0, auto))",
      },

      fontFamily: {
        Josefin: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({
      addBase,
      addComponents,
      addUtilities,
      matchUtilities,
      theme,
    }) {
      addBase({
        "* , *::after , *::before": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        "*": {
          fontSize: "initial",
          fontFamily: "Hanken Grotesk",
        },
        html: {
          scrollBehavior: "smooth",
          height: "100%",
        },
        body: {
          height: "100%",
          lineHeight: 1.5,
          fontFamily: "Josefin",
        },
        a: {
          textDecoration: "none",
          cursor: "pointer",
          color: "inherit",
          display: "block",
        },
        ul: {
          listStyle: "none",
        },
        img: {
          display: "block",
          maxWidth: "100%",
        },
        "video,canvas,svg": {
          display: "block",
          maxWidth: "100%",
        },
        "p,h1,h2,h3,h4,h5,h6": {
          overflowWrap: "break-word",
        },
        button: {
          cursor: "pointer",
          outline: "none",
          border: "none",
          backgroundColor: "transparent",
        },
        'input[type="text"]': {
          outline: "none",
          border: "none",
          backgroundColor: "transparent",
          padding: "1rem",
        },
        "#root": {
          height: "100%",
        },
      });
      addComponents({
        ".btn-primary": {
          padding: "1rem 2rem",
          backgroundColor: theme("colors.primary.100"),
          color: theme("colors.white"),
          borderRadius: theme("borderRadius.lg"),
          fontWeight: theme("fontWeight.bold"),
          fontFamily: theme("fontFamily.Josefin"),
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: theme("colors.primary.200"),
          },
        },
      });
      addUtilities({
        ".flex-center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".flex-between": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
        },
        ".flex-center-col": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          "flex-direction": "column",
        },
        ".flex-between-col": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
          "flex-direction": "column",
        },
        ".flex-start-col": {
          display: "flex",
          "align-items": "flex-start",
          "flex-direction": "column",
        },
        ".flex-between-start": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "flex-start",
        },
      });
      matchUtilities(
        {
          "grid-dynamic": (value) => {
            return {
              "grid-template-columns": `repeat(auto-fit, minmax(min(${value},100%) , 1fr))`,
            };
          },
        },
        {
          values: [
            "0px",
            "200px",
            "250px",
            "300px",
            "350px",
            "400px",
            "450px",
            "500px",
            "550px",
            "600px",
            "650px",
          ],
        }
      );
    }),
  ],
};
