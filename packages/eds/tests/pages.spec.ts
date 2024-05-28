import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
	await page.goto(`./`);

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Adobe Edge Delivery Services/);
});

test('article page loads', async ({ page }) => {
	await page.goto(`./insights/marketers-adobe-edge-delivery-services`);

	const h1 = await page.getByText(
		'Marketers Can Have Their Cake and Eat It Too with Adobe Edge Delivery Services',
	);

	await expect(h1).toBeDefined();
});
