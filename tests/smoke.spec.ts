import { test, expect } from '@playwright/test';

test('Verify Playwright home page title', async ({ page }) => {
  // 1. Navigate to the URL
  await page.goto('https://playwright.dev/');

  // 2. Expect a title "to contain" a substring.
  // This is an "Assertion" - the heart of any QA test.
  // Tiny change to see if commit > push works across the wire.
  await expect(page).toHaveTitle(/Playwright/);
});