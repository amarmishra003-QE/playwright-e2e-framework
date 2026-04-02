class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginButton = 'text=Login';
  }

  async open() {
    await this.page.goto('https://example.com');
  }

  async clickLogin() {
    await this.page.click(this.loginButton);
  }
}

module.exports = { LoginPage };
