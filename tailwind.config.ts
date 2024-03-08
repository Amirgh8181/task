import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        projYello:"#ffe43c",
        projPink:"#ff1f4f",
        projRed:"#a32100",
        projGreen:"#129141",
        projYello2:"#ffa800",

      },
      fontFamily: {
        vazir:['var(--vazir) sans']
      },
    },
  },
  plugins: [],
};
export default config;
