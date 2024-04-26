// https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.API_KEY": JSON.stringify(env.API_KEY),
    },
    plugins: [react()],
  };
});
