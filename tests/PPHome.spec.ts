import { test, expect } from '@playwright/test';

const urls = {
  homePage: 'https://www.prizepicks.com/',
}

const selectors = {
  signUpButton: '#navbar-signup-button',
  logInButton: '#navbar-login-button',
}

const expectedValues = {
  signUpButtonText: 'Sign Up',
  logInButtonText: 'Log In',
  signUpButtonColor: '#8000ff',
  logInButtonColor: '#1f202d',
}

test.describe('Home Page', () => {
  // Test if the "Sign Up" button is visible, has the correct text, and is the correct color
  test('Sign Up Button', async ({ page }) => {
    await page.goto(urls.homePage);
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
    await expect(page.locator(selectors.signUpButton)).toHaveText(expectedValues.signUpButtonText);
    await expect(page.locator(selectors.signUpButton)).toHaveCSS("--stankonia-100", expectedValues.signUpButtonColor);
  });

  // Test if the "Log In" button is visible, has the correct text, and is the correct color
  test('Log In Button', async ({ page }) => {
    await page.goto(urls.homePage);
    await expect(page.getByRole('link', { name: 'Log In' })).toBeVisible();
    await expect(page.locator(selectors.logInButton)).toHaveText(expectedValues.logInButtonText);
    await expect(page.locator(selectors.logInButton)).toHaveCSS("--so-fresh-120", expectedValues.logInButtonColor);
  });
});