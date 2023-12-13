import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import CustomReporter from './test/reporter';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    eslint({
      lintOnStart: true,
      failOnError: mode === "production",
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.js",
    include: ["./src/__tests__/*"],
    reporters: process.env.TEST_WITH_POINTS ? 
      [new CustomReporter({ starter: true })] :
      process.env.TEST_WITH_JSON ?
        [new CustomReporter({ starter: false })] : undefined
  },
  // To automatically open the app in the browser whenever the server starts,
  // uncomment the following lines:
  // server: {
  //   open: true
  // }
}));
