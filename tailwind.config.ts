import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          50: "hsl(var(--secondary-50))",
          200: "hsl(var(--secondary-200))",
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        yellow: {
          primary: "hsl(var(--yellow-primary))",
        },
        white: {
          DEFAULT: "hsl(var(--white))",
        },
        brand: {
          50: "hsl(var(--brand-50))",
          100: "hsl(var(--brand-100))",
          500: "hsl(var(--brand-500))",
          600: "hsl(var(--brand-600))",
          700: "hsl(var(--brand-700))",
          800: "hsl(var(--brand-800))",
          DEFAULT: "hsl(var(--brand-primary))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          dark: "hsl(var(--error-dark))",
          darker: "hsl(var(--error-darker))",
        },
        grey: {
          200: "hsl(var(--grey-200))",
        },
        stroke: {
          "medium-color": "hsl(var(--stroke-medium-color) / <alpha-value>)",
          "low-color": "hsl(var(--stroke-low-color) / <alpha-value>)",
        },

        disabled: "hsl(var(--disabled))",
        warning: {
          DEFAULT: "hsl(var(--warning-main))",
          lighter: "hsl(var(--warning-lighter))",
          light: "hsl(var(--warning-light))",
        },
        "fill-outermost": "hsl(var(--fill-outermost) / <alpha-value>)",
      },

      spacing: {
        "spacing-1": "var(--spacing-1)",
        "spacing-2": "var(--spacing-2)",
        "content-p": "var(--content-p)",
      },

      screens: {
        "3xl": "1824px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
