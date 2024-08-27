/* eslint-disable no-undef */

import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "350px", max: "639px" },
      },
      fontFamily: {
        sans: [
          "Craftwork Grotesk Regular",
          "Craftwork Grotesk Medium",
          "Craftwork Grotesk Semi Bold",
          "Craftwork Grotesk Bold",
          "Craftwork Grotesk Heavy",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        "slate-40": "#f8f9fa",
      },
      gridTemplateColumns: {
        24: "repeat(24, minmax(0, 1fr))",
      },
    },
  },
  plugins: [daisyui],
};
