class OrderPage {
  constructor(page) {
    this.page = page;
  }

  async searchAndBuyProduct( productName,  quantity) {
    // Clicar no menu "Products"
    await this.page.click('a[href="/products"]');

    // Preencher campo de busca
    await this.page.fill('#search_product', productName);
    await this.page.click('#submit_search');

    // Clicar no produto usando seletor dinâmico baseado no nome do produto
    // Aqui buscamos o link do produto que contém o nome exato do produto
    const productLink = this.page.locator(`a:has-text("${productName}")`);
    await productLink.waitFor({ state: 'visible', timeout: 5000 });
    await productLink.click();

    // Preencher quantidade e adicionar ao carrinho
    await this.page.fill('#quantity', quantity.toString());
    await this.page.click('button[type="button"][class*="cart"]');

    // Esperar o botão "Continue Shopping" visível e clicável no modal
    const continueBtn = this.page.getByRole('button', { name: 'Continue Shopping' });
    await continueBtn.waitFor({ state: 'visible', timeout: 5000 });
    await continueBtn.scrollIntoViewIfNeeded();
    await continueBtn.click();
  }

  async payOrder({
    name = process.env.NAME_ON_CARD,
    number = process.env.CARD_NUMBER,
    cvc = process.env.CVC,
    expiryMonth = process.env.EXPIRY_MONTH,
    expiryYear = process.env.EXPIRY_YEAR
  } = {}) { // ajuste para caso o objeto seja omitido
    await this.page.fill('[data-qa="name-on-card"]', name || '');
    await this.page.fill('[data-qa="card-number"]', number || '');
    await this.page.fill('[data-qa="cvc"]', cvc || '');
    await this.page.fill('[data-qa="expiry-month"]', expiryMonth || '');
    await this.page.fill('[data-qa="expiry-year"]', expiryYear || '');
  }

  async completeOrder() {
    // Ir para o carrinho
    await this.page.click('a[href="/view_cart"]');

    // Clicar em "Proceed to Checkout"
    const proceedBtn = this.page.locator('a[class*="check_out"]');
    await proceedBtn.waitFor({ state: 'visible', timeout: 5000 });
    await proceedBtn.click();

    // Clicar em "Place Order"
    const placeOrderBtn = this.page.locator('a[href="/payment"]');
    await placeOrderBtn.waitFor({ state: 'visible', timeout: 5000 });
    await placeOrderBtn.click();

    // Preencher dados e pagar
    await this.payOrder();
    await this.page.click('[data-qa="pay-button"]');

    // Verificar mensagem de sucesso
    await this.page.waitForSelector('text=Congratulations! Your order has been confirmed!', { timeout: 10000 });

    // Clicar em "Continue"
    const continueBtn = this.page.getByRole('button', { name: 'Continue' });
    await continueBtn.waitFor({ state: 'visible', timeout: 5000 });
    await continueBtn.click();
  }
}

module.exports = { OrderPage };
