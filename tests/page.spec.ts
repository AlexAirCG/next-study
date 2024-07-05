import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.locator("body").click();
  await page.goto("http://localhost:3000/");
  await page.getByRole("link").nth(1).click();
  await page.getByRole("link").nth(2).click();
  await page.getByRole("link").first().click();
});
