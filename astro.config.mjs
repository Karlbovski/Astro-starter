// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.example.com",
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Roboto",
        cssVariable: "--font-roboto",
      },
      {
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains-mono",
        provider: fontProviders.fontsource(),
        // Download only font files for characters used on the page
        subsets: ["latin", "latin-ext"],
        // Use a fallback font family matching the intended appearance
        fallbacks: ["monospace"],
      },
      {
        name: "Fira Sans",
        cssVariable: "--font-fira-sans",
        provider: "local",
        // Weight and style are not specified so Astro
        // will try to infer them for each variant
        variants: [
          {
            src: [
              "./src/assets/fonts/firasans-regular.woff2",
              "./src/assets/fonts/firasans-regular.woff",
            ],
          },
          {
            src: [
              "./src/assets/fonts/firasans-bold.woff2",
              "./src/assets/fonts/firasans-bold.woff",
            ],
          },
        ],
      },
    ],
  },
});
