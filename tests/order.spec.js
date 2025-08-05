const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { OrderPage } = require('../pages/OrderPage');

test.describe('Buy products - POM', () => {
  let loginPage;
  let orderPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    orderPage = new OrderPage(page);

    await loginPage.login();
  });

  test('Buy three different products', async ({ page }) => {
    await orderPage.searchAndBuyProduct("Stylish Dress", 3);
    await orderPage.searchAndBuyProduct("Beautiful Peacock Blue Cotton Linen Saree", 2);
    await orderPage.searchAndBuyProduct("Men Tshirt", 1);

    await orderPage.completeOrder();
  });
});
