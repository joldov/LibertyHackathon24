import { test, expect, describe } from '@playwright/test';

describe('On the Home page...', () => {
  test('The heading should exist.', async ({ page }) => {
    // Navigate to Home
    await page.goto('/');

    // Verify Heading Exists
    const locator = page.locator('h1');
    await expect(locator).toBeVisible();
    await expect(locator).toContainText('Welcome to the USRM Architecture NextJS Pattern');
  });

  test('Clicking the View Technologies button should navigate to the Technologies page.', async ({
    page,
  }) => {
    // Navigate to Home
    await page.goto('/');

    // Click the "View Technologies button"
    const locator = await page.getByTestId('technologies-button');
    await expect(locator).toBeVisible();
    await locator.click();

    // Verify navigation occurred.
    await expect(page).toHaveURL(/.*technologies/);
  });
});
