import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [react()]
// })

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  //console.log(import.meta.env); //Works fine: VALUE is logged
  console.log(mode);
  console.log(process.env.VITE_REACT);

  return defineConfig({
    // To access env vars here use process.env.TEST_VAR

    plugins: [react()],
  });
};
