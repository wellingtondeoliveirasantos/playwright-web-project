const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Login Test', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  test('Sucessful Login', async ({ page }) => {
    await loginPage.login();
  });

});
