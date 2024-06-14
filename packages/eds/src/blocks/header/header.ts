import './header.css';

import { getMetadata } from '@shiftparadigm/eds-core/utils/getMetadata';
import { loadFragment } from '../fragment/fragment.js';

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

	addNavWrapper(block, nav);
}

function addNavWrapper(block: Element, nav: Element) {
	const navWrapper = document.createElement('div');
	navWrapper.className = 'nav-wrapper';
	navWrapper.append(nav);
	block.append(navWrapper);
}
