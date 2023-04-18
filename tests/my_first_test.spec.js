// This is a Playwright Test file. Learn more at https://playwright.dev/docs/test-intro

const { test, expect } = require("@playwright/test");

// Async keyword means the function will return a promise.
test("My first test", async ({ page }) => {
  // The await keyword means the function will wait for the promise to resolve.
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(
    "Fast and reliable end-to-end testing for modern web apps | Playwright"
  );
});

// const { hello, helloWorld } = require("./demo/hello.js");

// console.log(hello());
// console.log(helloWorld());
