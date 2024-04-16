/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        // Define your custom vh values here
        "1/2vh": "50vh",
        "1/3vh": "33.333vh",
        "2/3vh": "66.666vh",
        // Add more custom values as needed
      },
      borderRadius: {
        'larger':'2rem'
      },
    },
    plugins: [],
  },
};
