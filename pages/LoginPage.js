require('dotenv').config();

class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailField = '[data-qa="login-email"]';
    this.passwordField = '[data-qa="login-password"]';
    this.loginButton = '[data-qa="login-button"]';
  }

  async gotoLoginPage() {
    await this.page.goto('/login');
  }

async login(user = "wellingtondeoliveirasanto@gmail.com", password = "datum") {
  console.log('User:', user);
  console.log('Password:', password ? '****' : 'undefined');
  await this.gotoLoginPage();
  await this.page.fill(this.emailField, user);
  await this.page.fill(this.passwordField, password);
  await this.page.click(this.loginButton);
}

}

module.exports = { LoginPage };
