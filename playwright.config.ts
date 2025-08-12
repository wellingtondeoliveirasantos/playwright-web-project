console.log('Variável CI no config:', process.env.CI);

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: process.env.CI ? 60000 : 30000,
  retries: 1,
  use: {
    headless: process.env.CI ? true : false,
    viewport: { width: 1280, height: 960 },
    actionTimeout: 10000,
    baseURL: 'https://automationexercise.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? 'line' : 'list',
});
