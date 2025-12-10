/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {
      colors: {
        white: "#fff",
        blacked: "#000",
        transparent: "#ffffff00",

        // Flattened richblack
        richblack5: "#F1F2FF",
        richblack25: "#DBDDEA",
        richblack50: "#C5C7D4",
        richblack100: "#AFB2BF",
        richblack200: "#999DAA",
        richblack300: "#838894",
        richblack400: "#6E727F",
        richblack500: "#585D69",
        richblack600: "#424854",
        richblack700: "#2C333F",
        richblack800: "#161D29",
        richblack900: "#000814",

        // Flattened richblue
        richblue5: "#ECF5FF",
        richblue25: "#C6D6E1",
        richblue50: "#A0B7C3",
        richblue100: "#7A98A6",
        richblue200: "#537988",
        richblue300: "#2D5A6A",
        richblue400: "#073B4C",
        richblue500: "#063544",
        richblue600: "#042E3B",
        richblue700: "#032833",
        richblue800: "#01212A",
        richblue900: "#001B22",

        // Flattened blue
        blue5: "#EAF5FF",
        blue25: "#B4DAEC",
        blue50: "#7EC0D9",
        blue100: "#47A5C5",
        blue200: "#118AB2",
        blue300: "#0F7A9D",
        blue400: "#0C6A87",
        blue500: "#0A5A72",
        blue600: "#074B5D",
        blue700: "#053B48",
        blue800: "#022B32",
        blue900: "#001B1D",
      },

      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px",
      },
      boxShadow: {
        mine: "-170px 42px 255px 179px rgba(0,0,0,1)",
        border: "15px 15px 0px 2px white",
      },
      screens: {
        xs: "0px",
      },
    },
  },
  plugins: [],
};
