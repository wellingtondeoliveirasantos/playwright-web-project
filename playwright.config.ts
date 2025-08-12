import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    headless: process.env.CI ? true : false, // CI = headless
    viewport: { width: 1280, height: 960 },
    actionTimeout: 10000,
    baseURL: 'https://automationexercise.com',
  },
  workers: process.env.CI ? 2 : undefined, // Menos workers no CI para estabilidade
});
