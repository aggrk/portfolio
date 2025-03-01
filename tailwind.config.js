export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      primary: "#0d1137", // Deep navy
      "primary-dark": "#0a0d2a", // Darker navy
      accent: "#e52165", // Vibrant pink-red
      neutral: {
        100: "#f5f5f5", // Light gray
        200: "#e0e0e0", // Slightly darker gray
      },
    },
  },
  plugins: [],
};
