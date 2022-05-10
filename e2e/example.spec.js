// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async({ page }) => {
    await page.goto('/');
});


test.describe('Test basic Home renderer', () => {
    test('should allow me see the render home', async({ page }) => {
        const layout = page.locator('.layout');
        await expect(layout).toBeVisible();
    });

    test('should allow me see the products items', async({ page }) => {
        const productItem = page.locator('.ProductItem').first();
        await expect(productItem).toBeVisible();
    });
});