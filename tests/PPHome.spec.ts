import { test, expect } from '@playwright/test';
// Test if the "Sign Up" button are visible, have the correct text, and are the correct colors
test('Test Sign Up Button', async ({ page }) => {
  await page.goto('https://www.prizepicks.com/');
  await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
  await expect(page.locator('#navbar-signup-button')).toContainText('Sign Up');
  await expect(page.locator('#navbar-signup-button')).toHaveCSS(
    "--stankonia-100",
    "#8000ff"
  )
});
// Test if the "Log In" buttons are visible, have the correct text, and are the correct colors
test('Test Log In Button', async ({ page }) => {
  await page.goto('https://www.prizepicks.com/');
  await expect(page.getByRole('link', { name: 'Log In' })).toBeVisible();
  await expect(page.locator('#navbar-login-button')).toContainText('Log In');
  await expect(page.locator('#navbar-login-button')).toHaveCSS(
    "--so-fresh-120",
    "#1f202d"
  )
});

