import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        /* 🌍 Base */
        background: "var(--background)",
        foreground: "var(--foreground)",

        /* 🔵 Primary */
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",

        /* ⚪ Secondary */
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",

        /* 💜 Accent */
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",

        /* 🧼 Muted */
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",

        /* 🧱 Border */
        border: "var(--border)",

        /* 🧊 Surface (tu l’as dans CSS mais pas dans config avant) */
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",

        /* 💬 Feedback colors (présents dans ton CSS) */
        success: "var(--success)",
        "success-foreground": "var(--success-foreground)",

        warning: "var(--warning)",
        "warning-foreground": "var(--warning-foreground)",

        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
      },

      borderRadius: {
        lg: "var(--radius)",
      },
    },
  },

  plugins: [],
};

export default config;
