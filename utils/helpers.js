const { faker } = require('@faker-js/faker');

async function createUser(page) {
  await page.goto('/login');

  await page.fill('[data-qa="signup-name"]', faker.internet.userName());
  await page.fill('[data-qa="signup-email"]', faker.internet.email());
  await page.click('[data-qa="signup-button"]');

  await page.click('#id_gender1');
  await page.fill('[data-qa="password"]', faker.internet.password());
  await page.fill('[data-qa="first_name"]', faker.name.firstName());
  await page.fill('[data-qa="last_name"]', faker.name.lastName());
  await page.fill('[data-qa="address"]', faker.address.streetAddress());
  await page.selectOption('[data-qa="country"]', "Canada");
  await page.fill('[data-qa="state"]', faker.address.state());
  await page.fill('[data-qa="city"]', faker.address.city());
  await page.fill('[data-qa="zipcode"]', faker.address.zipCode());
  await page.fill('[data-qa="mobile_number"]', faker.phone.number());

  await page.click('[data-qa="create-account"]');
  await page.waitForSelector('text=Congratulations! Your new account has been successfully created!');
  await page.click('[data-qa="continue-button"]');
}

async function login(page, user, password) {
  await page.goto('/login');
  await page.fill('[data-qa="login-email"]', user);
  await page.fill('[data-qa="login-password"]', password);
  await page.click('[data-qa="login-button"]');
}

async function payOrder(page, cardInfo) {
  const { name, number, cvc, expiryMonth, expiryYear } = cardInfo;

  await page.fill('[data-qa="name-on-card"]', name);
  await page.fill('[data-qa="card-number"]', number);
  await page.fill('[data-qa="cvc"]', cvc);
  await page.fill('[data-qa="expiry-month"]', expiryMonth);
  await page.fill('[data-qa="expiry-year"]', expiryYear);
}

async function searchAndBuyProduct(page, productName, quantity) {
  await page.click('.shop-menu > .nav > :nth-child(2) > a');
  await page.fill('#search_product', productName);
  await page.click('#submit_search');
  await page.click('.choose > .nav > li > a');
  await page.fill('#quantity', quantity.toString());
  await page.click(':nth-child(5) > .btn');
  await page.click('.modal-footer > .btn');
}

async function order(page, cardInfo) {
  await searchAndBuyProduct(page, "Stylish Dress", 3);
  await searchAndBuyProduct(page, "Beautiful Peacock Blue Cotton Linen Saree", 2);
  await searchAndBuyProduct(page, "Men Tshirt", 1);

  await page.click('.shop-menu > .nav > :nth-child(3) > a');
  await page.click('.col-sm-6 > .btn');
  await page.click(':nth-child(7) > .btn');

  await payOrder(page, cardInfo);

  await page.click('[data-qa="pay-button"]');
  await page.waitForSelector('text=Congratulations! Your order has been confirmed!');
  await page.click('[data-qa="continue-button"]');
}

module.exports = {
  createUser,
  login,
  payOrder,
  order
};
