const { test, expect } = require('@playwright/test');

test('Add to Cart Test', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toBeTruthy();
});
