import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "350px", // Breakpoint untuk ekstra kecil
        s: "600px", // Breakpoint untuk sangat kecil
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "11rem",
        "12xl": "12rem",
        "13xl": "13rem",
        "14xl": "14rem", // Tambahkan ukuran font hingga 14xl
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
