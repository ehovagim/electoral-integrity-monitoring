import { defineConfig } from "vite"

// Relative base so the built site works from any Pages subpath
// (https://<user>.github.io/<repo>/).
export default defineConfig({
  base: "./",
})
