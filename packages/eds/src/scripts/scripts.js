import { decorateMain } from '@shiftparadigm/eds-core/utils/decorateMain';
import { decorateTemplateAndTheme } from '@shiftparadigm/eds-core/utils/decorateTemplateAndTheme';
import { loadBlocks } from '@shiftparadigm/eds-core/utils/loadBlocks';
import { loadCSS } from '@shiftparadigm/eds-core/utils/loadCSS';
import { loadFooter } from '@shiftparadigm/eds-core/utils/loadFooter';
import { loadHeader } from '@shiftparadigm/eds-core/utils/loadHeader';
import { sampleRUM } from '@shiftparadigm/eds-core/utils/sampleRUM';
import { waitForLCP } from '@shiftparadigm/eds-core/utils/waitForLCP';
import initializeDropins from './dropins.js';

const LCP_BLOCKS = [
	'product-list-page',
	'product-list-page-custom',
	'product-details',
	'commerce-cart',
	'commerce-checkout',
	'commerce-account',
	'commerce-login',
]; // add your LCP blocks to the list

/**
 * load fonts.css and set a session storage flag
 */
async function loadFonts() {
	await loadCSS(`${window.hlx.codeBasePath}/styles/fonts.css`);
	try {
		if (!window.location.hostname.includes('localhost'))
			sessionStorage.setItem('fonts-loaded', 'true');
	} catch (e) {
		// do nothing
	}
}

/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
	document.documentElement.lang = 'en';
	await initializeDropins();
	decorateTemplateAndTheme();

	window.adobeDataLayer = window.adobeDataLayer || [];

	let pageType = 'CMS';
	if (document.body.querySelector('main .product-details')) {
		pageType = 'Product';
	} else if (document.body.querySelector('main .product-list-page')) {
		pageType = 'Category';
	} else if (document.body.querySelector('main .commerce-cart')) {
		pageType = 'Cart';
	} else if (document.body.querySelector('main .commerce-checkout')) {
		pageType = 'Checkout';
	}
	window.adobeDataLayer.push({
		pageContext: {
			pageType,
			pageName: document.title,
			eventType: 'visibilityHidden',
			maxXOffset: 0,
			maxYOffset: 0,
			minXOffset: 0,
			minYOffset: 0,
		},
	});
	window.adobeDataLayer.push((dl) => {
		dl.push({ event: 'page-view', eventInfo: { ...dl.getState() } });
	});

	const main = doc.querySelector('main');
	if (main) {
		decorateMain(main);
		document.body.classList.add('appear');
		await waitForLCP(LCP_BLOCKS);
	}

	try {
		/* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
		if (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) {
			loadFonts();
		}
	} catch (e) {
		// do nothing
	}
}

/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */
async function loadLazy(doc) {
	const main = doc.querySelector('main');
	await loadBlocks(main);

	const { hash } = window.location;
	const element = hash ? doc.getElementById(hash.substring(1)) : false;
	if (hash && element) element.scrollIntoView();

	loadHeader(doc.querySelector('header'));
	loadFooter(doc.querySelector('footer'));

	loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
	loadFonts();

	await import('@adobe/adobe-client-data-layer');
	if (sessionStorage.getItem('acdl:debug')) {
		import('./acdl/validate');
	}

	sampleRUM('lazy');
	sampleRUM.observe(main.querySelectorAll('div[data-block-name]'));
	sampleRUM.observe(main.querySelectorAll('picture > img'));
}

/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
	// eslint-disable-next-line import/no-cycle
	window.setTimeout(() => import('./delayed.js'), 3000);
	// load anything that can be postponed to the latest here
}

export async function fetchIndex(indexFile, pageSize = 500) {
	const handleIndex = async (offset) => {
		const resp = await fetch(
			`/${indexFile}.json?limit=${pageSize}&offset=${offset}`,
		);
		const json = await resp.json();

		const newIndex = {
			complete: json.limit + json.offset === json.total,
			offset: json.offset + pageSize,
			promise: null,
			data: [...window.index[indexFile].data, ...json.data],
		};

		return newIndex;
	};

	window.index = window.index || {};
	window.index[indexFile] = window.index[indexFile] || {
		data: [],
		offset: 0,
		complete: false,
		promise: null,
	};

	// Return index if already loaded
	if (window.index[indexFile].complete) {
		return window.index[indexFile];
	}

	// Return promise if index is currently loading
	if (window.index[indexFile].promise) {
		return window.index[indexFile].promise;
	}

	window.index[indexFile].promise = handleIndex(window.index[indexFile].offset);
	const newIndex = await window.index[indexFile].promise;
	window.index[indexFile] = newIndex;

	return newIndex;
}

/**
 * Loads a fragment.
 * @param {string} path The path to the fragment
 * @returns {HTMLElement} The root element of the fragment
 */
export async function loadFragment(path) {
	if (path && path.startsWith('/')) {
		const resp = await fetch(`${path}.plain.html`);
		if (resp.ok) {
			const main = document.createElement('main');
			main.innerHTML = await resp.text();
			decorateMain(main);
			await loadBlocks(main);
			return main;
		}
	}
	return null;
}

async function loadPage() {
	await loadEager(document);
	await loadLazy(document);
	loadDelayed();
}

loadPage();
