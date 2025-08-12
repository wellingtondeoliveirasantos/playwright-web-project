import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    headless: process.env.CI ? true : false, // No CI roda headless
    viewport: { width: 1280, height: 960 },
    actionTimeout: 10000,
    baseURL: 'https://automationexercise.com',
  },
  workers: process.env.CI ? 2 : undefined, // Menos workers no CI
  reporter: process.env.CI ? 'line' : 'list', // Logs mais simples no CI
});
