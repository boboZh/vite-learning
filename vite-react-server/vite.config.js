import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // 指定哪些需要预编译，哪些不需要,vite默认会扫描一遍依赖不需要手动指定。如果开发过程中遇到了类似的the requested module 'xx/xx/xx/xx.js' does not provide an export named 'default'这种情况，可以尝试把这个包加在include里，然后重新运行一下。某些情况下，我们使用的依赖又依赖于别的第三方的依赖，这个时候vite扫描不到才会出现。
    exclude: [], //
  },
});
