import '@shiftparadigm/eds-core/blocks/footer/footer.css';
import { getMetadata } from '@shiftparadigm/eds-core/utils/getMetadata';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block: Element) {
	// load footer as fragment
	const footerMeta = getMetadata('footer');
	const footerPath = footerMeta
		? new URL(footerMeta, window.location.href).pathname
		: '/footer';
	const fragment = await loadFragment(footerPath);

	// decorate footer DOM
	block.textContent = '';
	const footer = document.createElement('div');
	while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

	block.append(footer);
}
