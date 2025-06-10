import react from "@vitejs/plugin-react";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// برای اینکه __dirname در ESM داشته باشیم
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"), // مسیر ورودی پکیج
      name: "motion-text",
      fileName: "motion-text",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"], // جلوگیری از باندل شدن ری‌اکت
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },
});
