// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dimsumYellow: "#FACC15", // Kuning khas dari gambar
        dimsumDark: "#1A1A1A",   // Hitam charcoal untuk teks/aksen
        silverPlaceholder: "#C0C0C0", // Warna perak untuk gambar kosong
      },
    },
  },
  plugins: [],
};
export default config;