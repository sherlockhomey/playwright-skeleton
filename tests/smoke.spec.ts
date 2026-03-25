import { test, expect } from '@playwright/test';

test('Verify Playwright home page title', async ({ page }) => {
  // 1. Navigate to the URL
  await page.goto('https://playwright.dev/');

  // 2. Expect a title "to contain" a substring.
  // This is an "Assertion" - the heart of any QA test.
  await expect(page).toHaveTitle(/Playwright/);
});