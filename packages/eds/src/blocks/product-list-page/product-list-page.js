import { loadScript, readBlockConfig } from '../../scripts/aem.js';
import { getConfigValue } from '../../scripts/configs.js';
import './product-list-page.css';

export default async function decorate(block) {
	const { category, type } = readBlockConfig(block);
	block.textContent = '';

	const widgetProd = '/scripts/widgets/search.js';
	await loadScript(widgetProd);

	const storeDetails = {
		environmentId: await getConfigValue('commerce-environment-id'),
		environmentType: (await getConfigValue('commerce-endpoint')).includes(
			'sandbox',
		)
			? 'testing'
			: '',
		apiKey: await getConfigValue('commerce-x-api-key'),
		websiteCode: await getConfigValue('commerce-website-code'),
		storeCode: await getConfigValue('commerce-store-code'),
		storeViewCode: await getConfigValue('commerce-store-view-code'),
		config: {
			pageSize: 8,
			perPageConfig: {
				pageSizeOptions: '12,24,36',
				defaultPageSizeOption: '12',
			},
			minQueryLength: '2',
			currencySymbol: '$',
			currencyRate: '1',
			displayOutOfStock: true,
			allowAllProducts: false,
			imageCarousel: false,
			optimizeImages: true,
			imageBaseWidth: 200,
			listview: true,
			displayMode: '', // "" for plp || "PAGE" for category/catalog
			addToCart: async (...args) => {
				const { addProductsToCart } = await import(
					'@dropins/storefront-cart/api.js'
				);
				await addProductsToCart([
					{
						sku: args[0],
						options: args[1],
						quantity: args[2],
					},
				]);
			},
		},
		context: {
			customerGroup: await getConfigValue('commerce-customer-group'),
		},
		route: ({ sku, urlKey }) => `/products/${urlKey}/${sku}`,
	};

	if (type !== 'search') {
		storeDetails.config.categoryName = document.querySelector(
			'.default-content-wrapper > h1',
		)?.innerText;
		storeDetails.config.currentCategoryId = category;

		// Enable enrichment
		block.dataset.category = category;
	}

	await new Promise((resolve) => {
		const interval = setInterval(() => {
			if (window.LiveSearchPLP) {
				clearInterval(interval);
				resolve();
			}
		}, 200);
	});

	return window.LiveSearchPLP({ storeDetails, root: block });
}