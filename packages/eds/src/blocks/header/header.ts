import './header.css';

import MiniCart from '@dropins/storefront-cart/containers/MiniCart.js';
import { render as cartProvider } from '@dropins/storefront-cart/render.js';
import { events } from '@dropins/tools/event-bus.js';
import { getMetadata } from '@shiftparadigm/eds-core/utils/getMetadata';
import { loadFragment } from '../fragment/fragment.js';

// media query match that indicates mobile/tablet width
const isDesktop = window.matchMedia('(min-width: 900px)');

function closeOnEscape(e: KeyboardEvent) {
	if (e.code === 'Escape') {
		const nav = document.getElementById('nav');
		const navSections = nav?.querySelector('.nav-sections');
		if (!nav || !navSections) return;
		const navSectionExpanded = navSections?.querySelector<HTMLElement>(
			'[aria-expanded="true"]',
		);
		if (navSections && navSectionExpanded && isDesktop.matches) {
			toggleAllNavSections(navSections);
			navSectionExpanded.focus();
		} else if (!isDesktop.matches) {
			toggleMenu(nav, navSections);
			nav.querySelector('button')?.focus();
		}
	}
}

function openOnKeydown(e: Event) {
	const focused = document.activeElement;
	const isNavDrop = focused?.className === 'nav-drop';
	if (isNavDrop && 'code' in e && (e.code === 'Enter' || e.code === 'Space')) {
		const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
		toggleAllNavSections(focused.closest('.nav-sections')!);
		focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
	}
}

function focusNavSection() {
	document.activeElement?.addEventListener('keydown', openOnKeydown);
}

/**
 * Toggles all nav sections
 * @param {Element} sections The container element
 * @param {Boolean} expanded Whether the element should be expanded or collapsed
 */
function toggleAllNavSections(sections: Element, expanded = false) {
	sections
		.querySelectorAll('.nav-sections .default-content-wrapper > ul > li')
		.forEach((section) => {
			section.setAttribute('aria-expanded', String(expanded));
		});
}

/**
 * Toggles the entire nav
 * @param {Element} nav The container element
 * @param {Element} navSections The nav sections within the container element
 * @param {*} forceExpanded Optional param to force nav expand behavior when not null
 */
function toggleMenu(
	nav: Element,
	navSections: Element,
	forceExpanded?: boolean,
) {
	const expanded =
		forceExpanded !== null
			? !forceExpanded
			: nav.getAttribute('aria-expanded') === 'true';
	const button = nav.querySelector<HTMLButtonElement>('.nav-hamburger button');
	document.body.style.overflowY = expanded || isDesktop.matches ? '' : 'hidden';
	nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
	toggleAllNavSections(navSections, !expanded && !isDesktop.matches);
	button?.setAttribute(
		'aria-label',
		expanded ? 'Open navigation' : 'Close navigation',
	);
	// enable nav dropdown keyboard accessibility
	const navDrops = navSections.querySelectorAll('.nav-drop');
	if (isDesktop.matches) {
		navDrops.forEach((drop) => {
			if (!drop.hasAttribute('tabindex')) {
				drop.setAttribute('role', 'button');
				drop.setAttribute('tabindex', '0');
				drop.addEventListener('focus', focusNavSection);
			}
		});
	} else {
		navDrops.forEach((drop) => {
			drop.removeAttribute('role');
			drop.removeAttribute('tabindex');
			drop.removeEventListener('focus', focusNavSection);
		});
	}
	// enable menu collapse on escape keypress
	if (!expanded || isDesktop.matches) {
		// collapse menu on escape press
		window.addEventListener('keydown', closeOnEscape);
	} else {
		window.removeEventListener('keydown', closeOnEscape);
	}
}

/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block: Element) {
	// load nav as fragment
	const navMeta = getMetadata('nav');
	const navPath = navMeta
		? new URL(navMeta, window.location.href).pathname
		: '/nav';
	const fragment = await loadFragment(navPath);

	// decorate nav DOM
	block.textContent = '';
	const nav = document.createElement('nav');
	nav.id = 'nav';
	while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

	const classes = ['brand', 'sections', 'tools'];
	classes.forEach((c, i) => {
		const section = nav.children[i];
		if (section) section.classList.add(`nav-${c}`);
	});

	const navBrand = nav.querySelector('.nav-brand');
	const navLogo = navBrand?.querySelector('picture');
	const navLink = document.createElement('a');
	navLink?.setAttribute('href', '/');
	navLogo?.parentNode?.insertBefore(navLink, navLogo);
	navLogo && navLink.appendChild(navLogo);

	const brandLink = navBrand?.querySelector('.button');
	if (brandLink) {
		brandLink.className = '';
		const container = brandLink.closest('.button-container');
		if (container) container.className = '';
	}

	const navSections = nav.querySelector('.nav-sections');
	if (navSections) {
		navSections
			.querySelectorAll(':scope .default-content-wrapper > ul > li')
			.forEach((navSection) => {
				if (navSection.querySelector('ul'))
					navSection.classList.add('nav-drop');
				navSection.addEventListener('click', () => {
					if (isDesktop.matches) {
						const expanded =
							navSection.getAttribute('aria-expanded') === 'true';
						toggleAllNavSections(navSections);
						navSection.setAttribute(
							'aria-expanded',
							expanded ? 'false' : 'true',
						);
					}
				});
			});
	}

	const navTools = nav.querySelector('.nav-tools');
	if (navTools) {
		const parts = [addMiniCart(navTools), addSearch(navTools)];

		registerClickOutsidePanels(parts);
	}

	// hamburger for mobile
	if (navSections) {
		addMobileHamburger(nav, navSections);
	}

	addNavWrapper(block, nav);
}

function addMiniCart(navTools: Element): NavPanel {
	/** Mini Cart */
	const excludeMiniCartFromPaths = ['/checkout', '/order-confirmation'];

	const minicart = document.createRange().createContextualFragment(`
     <div class="minicart-wrapper nav-tools-wrapper">
       <button type="button" class="button nav-cart-button" aria-label="Cart"></button>
       <div class="minicart-panel nav-tools-panel"></div>
     </div>
   `);

	navTools.append(minicart);

	const minicartPanel = navTools.querySelector('.minicart-panel')!;

	const cartButton = navTools.querySelector<HTMLElement>('.nav-cart-button')!;

	if (excludeMiniCartFromPaths.includes(window.location.pathname)) {
		cartButton.style.display = 'none';
	}

	async function toggleMiniCart(state?: boolean) {
		const show =
			state ?? !minicartPanel.classList.contains('nav-tools-panel--show');

		if (show) {
			await cartProvider.render(MiniCart, {
				routeEmptyCartCTA: () => '/',
				routeProduct: (product) =>
					`/products/${product.url.urlKey}/${product.sku}`,
				routeCart: () => '/cart',
				routeCheckout: () => '/checkout',
			})(minicartPanel);
		} else {
			cartProvider.unmount(minicartPanel);
		}

		minicartPanel.classList.toggle('nav-tools-panel--show', show);
	}

	cartButton.addEventListener('click', () => void toggleMiniCart());

	// Cart Item Counter
	events.on(
		'cart/data',
		(data) => {
			if (data?.totalQuantity) {
				cartButton.setAttribute('data-count', String(data.totalQuantity));
			} else {
				cartButton.removeAttribute('data-count');
			}
		},
		{ eager: true },
	);

	return {
		panel: minicartPanel,
		button: cartButton,
		toggle: toggleMiniCart,
	};
}

function addSearch(navTools: Element): NavPanel {
	/** Search */

	// TODO
	const search = document.createRange().createContextualFragment(`
  <div class="search-wrapper nav-tools-wrapper">
    <button type="button" class="button nav-search-button">Search</button>
    <div class="nav-search-input nav-search-panel nav-tools-panel">
      <form action="/search" method="GET">
        <input id="search" type="search" name="q" placeholder="Search" />
        <div id="search_autocomplete" class="search-autocomplete"></div>
      </form>
    </div>
  </div>
  `);

	navTools.append(search);

	const searchPanel = navTools.querySelector('.nav-search-panel')!;

	const searchButton = navTools.querySelector('.nav-search-button')!;

	const searchInput = searchPanel.querySelector('input')!;

	async function toggleSearch(state?: boolean) {
		const show =
			state ?? !searchPanel.classList.contains('nav-tools-panel--show');

		searchPanel.classList.toggle('nav-tools-panel--show', show);

		if (show) {
			await import('./searchbar.js');
			searchInput.focus();
		}
	}

	searchButton.addEventListener('click', () => void toggleSearch());

	return {
		panel: searchPanel,
		button: searchButton,
		toggle: toggleSearch,
	};
}

type NavPanel = {
	panel: Element;
	button: Element;
	toggle: (forceState?: boolean) => Promise<void>;
};

function registerClickOutsidePanels(parts: NavPanel[]) {
	// Close panels when clicking outside
	document.addEventListener('click', (e) => {
		const target = e.target instanceof Node ? e.target : null;
		for (const part of parts) {
			if (!part.panel.contains(target) && !part.button.contains(target)) {
				void part.toggle(false);
			}
		}
	});
}

function addMobileHamburger(nav: Element, navSections: Element) {
	const hamburger = document.createElement('div');
	hamburger.classList.add('nav-hamburger');
	hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
	<span class="nav-hamburger-icon"></span>
	</button>`;
	hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
	nav.prepend(hamburger);
	nav.setAttribute('aria-expanded', 'false');
	// prevent mobile nav behavior on window resize
	toggleMenu(nav, navSections, isDesktop.matches);
	isDesktop.addEventListener('change', () =>
		toggleMenu(nav, navSections, isDesktop.matches),
	);
}

function addNavWrapper(block: Element, nav: Element) {
	const navWrapper = document.createElement('div');
	navWrapper.className = 'nav-wrapper';
	navWrapper.append(nav);
	block.append(navWrapper);
}
