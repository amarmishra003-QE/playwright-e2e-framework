
const { test, expect } = require('@playwright/test');

test('Search Test', async ({ page }) => {
  await page.goto('https://example.com');

  const title = await page.title();
  await expect(title).toContain('Example');
});
