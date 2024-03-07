/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "primary-bg-color":"rgb(59 130 246)",
        "navbar-bg-color":"#FFF7F4",
        "button-bg-color":"rgb(59 130 246)",
        "button-bg-hover-color":"#FFF7F4",
      },
      colors:{
        "text-color-dark":"rgb(0 0 0)",
        "text-color-blue":"rgb(59 130 246)",
        "hover-text-color":"rgb(59 130 246)",
        "hover-border-color":"rgb(59 130 246)",
      },
    },
  },
  plugins: [],
}

