/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
      },
      fontSize: {
        base: "15px",
      },
      colors: {
        userDarkMagenta: "hsl(300, 43%, 22%)",
        userSoftPink: "hsl(333, 80%, 67%)",
        userDarkGrayishMagenta: "hsl(303, 10%, 53%)",
        userLightGrayishMagenta: "hsl(300, 24%, 96%)",
      },
      backgroundImage: {
        userBgTopMobile: "url('/bg-pattern-top-mobile.svg')",
        userBgBottomMobile: "url('/bg-pattern-bottom-mobile.svg')",
        userBgTopDesktop: "url('/bg-pattern-top-desktop.svg')",
        userBgBottomDesktop: "url('/bg-pattern-bottom-desktop.svg')",
      },
    },
  },
  plugins: [],
};
