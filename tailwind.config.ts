
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#6366f1", // Indigo-500
          hover: "#4f46e5", // Indigo-600
          foreground: "#ffffff",
          muted: "#818cf8" // Indigo-400
        },
        secondary: {
          DEFAULT: "#e0e7ff", // Indigo-100
          foreground: "#3730a3" // Indigo-800
        },
        accent: {
          DEFAULT: "#c7d2fe", // Indigo-200
          foreground: "#1e1b4b" // Indigo-950
        },
        muted: {
          DEFAULT: "#eef2ff", // Indigo-50
          foreground: "#4338ca" // Indigo-700
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1e1b4b" // Indigo-950
        }
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.4s ease-out",
        "fade-out": "fade-out 0.4s ease-out"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(to right, #4f46e5, #818cf8)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
