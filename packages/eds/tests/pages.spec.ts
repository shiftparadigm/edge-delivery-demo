import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
	await page.goto(`./`);

	const h1 = await page.getByRole('heading', { level: 1 });

	await expect(h1).toHaveText('Adobe Edge Delivery Services');
	await expect(h1).toBeVisible();
});

test('article page loads', async ({ page }) => {
	await page.goto(`./insights/marketers-adobe-edge-delivery-services`);

	const h1 = await page.getByText(
		'Marketers Can Have Their Cake and Eat It Too with Adobe Edge Delivery Services',
	);

	await expect(h1).toBeVisible();
});
