import { test, expect, describe } from '@playwright/test';

describe('When using the navigation on the Home page...', () => {
  test('Clicking the Technologies link should navigate to the Technologies page.', async ({
    page,
  }) => {
    // Navigate to Home
    await page.goto('/');

    // Click the "Technologies" link.
    const locator = await page.getByLabel('Main Navigation').getByText('Technologies');
    await expect(locator).toBeVisible();
    await locator.click();

    // Verify navigation occurred.
    await expect(page).toHaveURL(/.*technologies/);
  });
});

describe('When using the navigation on the Technologies page...', () => {
  test('Clicking the Home link should navigate to the Home page.', async ({ page }) => {
    // Navigate to Technologies
    await page.goto('/technologies');

    // Click the "Home" link.
    const locator = await page.getByLabel('Main Navigation').getByText('Home');
    await expect(locator).toBeVisible();
    await locator.click();

    // Verify navigation occurred.
    await expect(page).toHaveURL('/');
  });
});
