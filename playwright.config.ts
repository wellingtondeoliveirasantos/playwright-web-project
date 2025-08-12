import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: process.env.CI ? 60000 : 30000, // Mais tempo no CI
  retries: 1,
  use: {
    headless: process.env.CI ? true : false,
    viewport: { width: 1280, height: 960 },
    actionTimeout: 10000,
    baseURL: 'https://automationexercise.com',
    screenshot: 'only-on-failure', // Guarda screenshot no erro
    video: 'retain-on-failure',    // Guarda vídeo no erro
  },
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? 'line' : 'list',
});
