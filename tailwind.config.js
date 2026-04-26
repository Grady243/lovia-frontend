import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",

        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",

        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",

        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",

        border: "var(--border)",

        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",

        success: "var(--success)",
        "success-foreground": "var(--success-foreground)",

        warning: "var(--warning)",
        "warning-foreground": "var(--warning-foreground)",

        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
      },

      borderColor: {
        border: "var(--border)",
      },

      borderRadius: {
        lg: "var(--radius)",
      },
    },
  },

  plugins: [],
};

export default config;
