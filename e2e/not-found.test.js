import { test, expect } from '@playwright/test';

test('Navigating to an incorrect url should trigger a 404.', async ({ page }) => {
  // Navigate to Home
  await page.goto('/not-a-real-page');

  // Verify the 404 page was reached.
  const locator = await page.getByText("We can't seem to find the page you're looking for.");

  // Assert
  expect(locator).toBeTruthy();
});
