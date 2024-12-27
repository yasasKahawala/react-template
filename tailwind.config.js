/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
      light: {
        primary: "#23B8CC",
        "on-primary": "#ffffff",
        "primary-variant": "#009fb7",
        "on-primary-variant": "#ffffff",
        bg: "#f0f1f2",
        "on-bg": "#212b36",
        "on-bg-opt2": "#606775",
        "line-on-bg": "#dde0e4",
        surface: "#ffffff",
        "on-surface": "#212b36",
        "on-surface-opt2": "#606775",
        "line-on-surface": "#e8eaed",
        error: "#c64169",
        "on-error": "#ffffff",
        platypus: "#23B8CC",
        "platypus-loud": "#107C92",
        "platypus-silent": "#D9F7FF",
        kangaroo: "#FFCB36",
        "kangaroo-loud": "#EE950C",
        "kangaroo-silent": "#F8E9BF",
        kiwi: "#00CEA5",
        "kiwi-loud": "#1C876E",
        "kiwi-silent": "#CEFDF0",
        taz: "#D7557C",
        "taz-loud": "#892946",
        "taz-silent": "#FFDBE2",
        wombat: "#4F75E3",
        "wombat-loud": "#061DA0",
        "wombat-silent": "#DBE4FF",
        emu: "#C8CBD2",
        "emu-loud": "#797F8B",
        "emu-silent": "#E8EAEC",
        dingo: "#075369",
        "dingo-loud": "#003B4F",
        solar: "#F2AD3C",
      },
      dark: {
        primary: "#43CEE0",
        "on-primary": "#000323",
        "primary-variant": "#23B8CC",
        "on-primary-variant": "#000323",
        bg: "#0F141A",
        "on-bg": "#E8EAEC",
        "on-bg-opt2": "#C8CBD2",
        "line-on-bg": "#212B36",
        surface: "#141C24",
        "on-surface": "#E8EAEC",
        "on-surface-opt2": "#C8CBD2",
        "line-on-surface": "#2E3642",
        error: "#C64169",
        "on-error": "#ffffff",
        platypus: "#159EB5",
        "platypus-loud": "#43CEE0",
        "platypus-silent": "#003B4F",
        kangaroo: "#F7B023",
        "kangaroo-loud": "#FFD55C",
        "kangaroo-silent": "#462B14",
        kiwi: "#009F77",
        "kiwi-loud": "#00CEA5",
        "kiwi-silent": "#00CEA5",
        taz: "#C64169",
        "taz-loud": "#EF7499",
        "taz-silent": "#5C2838",
        wombat: "#3646E0",
        "wombat-loud": "#7B99ED",
        "wombat-silent": "#0C1574",
        emu: "#3C4453",
        "emu-loud": "#A4A8B2",
        "emu-silent": "#1F2933",
        dingo: "#075369",
        "dingo-loud": "#107C92",
        solar: "#F09C41",
      },
    },
    extend: {
      animation: {
        "spin-slow": "spin 2.5s linear infinite",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
    },
  },
  plugins: [],
};
