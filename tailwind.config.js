/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      kalam: ["Kalam", "cursive"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#570df8",
          secondary: "#f000b8",
          accent: "#006400", // warna accent custom di DaisyUI
          neutral: "#3d4451",
          "base-100": "#ffffff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
      // "light", // tema bawaan lain jika mau
    ],
  },
};
