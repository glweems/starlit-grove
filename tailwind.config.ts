import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        evergreen: "#fff",
        sage: "#fff",
        cream: "#F5ECD5",
        wheat: "#F0BB78",
      },
    },
  },
  plugins: [],
} satisfies Config;
