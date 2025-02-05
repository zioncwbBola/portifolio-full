/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        techlight: {
          primary: "#30D499", // Verde água
          secondary: "#4A39D2", // Azul forte
          accent: "#4D15AD", // Roxo vibrante
          neutral: "#374151",
          "base-100": "#f8f8f2",
          "base-gradient": "linear-gradient(101deg, rgba(48,212,153,1) 0%, rgba(74,57,210,1) 48%, rgba(77,21,173,1) 100%)",
          info: "#8be9fd",
          success: "#50fa7b",
          warning: "#f1fa8c",
          error: "#ff5555",
          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.3rem",
          "--rounded-badge": "0.3rem",
          "--animation-btn": "0.3s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.3rem",
        },
        techdark: {
          primary: "#246E53", // Verde escuro
          secondary: "#1A1261", // Azul profundo
          accent: "#483070", // Roxo mais fechado
          neutral: "#1F2937",
          "base-100": "#1a1a2e",
          "base-gradient": "linear-gradient(101deg, rgba(36,110,83,1) 0%, rgba(26,18,97,1) 48%, rgba(72,48,112,1) 100%)",
          info: "#8be9fd",
          success: "#50fa7b",
          warning: "#f1fa8c",
          error: "#ff5555",
          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.3rem",
          "--rounded-badge": "0.3rem",
          "--animation-btn": "0.3s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.3rem",
        },
      },
    ],
  },
};
