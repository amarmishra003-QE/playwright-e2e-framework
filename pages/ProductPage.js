
class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://example.com');
  }
}

module.exports = { ProductPage };
