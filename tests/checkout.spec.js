
const { test, expect } = require('@playwright/test');

test('Checkout Flow', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toBeTruthy();
});
