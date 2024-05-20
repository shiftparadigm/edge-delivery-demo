export default function decorate(block: Element) {
	const { firstElementChild } = block.firstElementChild || {};

	const imageParent = block.querySelector('picture')
		?.parentNode as HTMLDivElement;
	imageParent?.classList.add('image-text-image-wrap');

	const textParent = block.querySelector('h2,h3,h4')
		?.parentNode as HTMLDivElement;
	textParent?.classList.add('image-text-text-wrap');

	if (firstElementChild?.classList.contains('image-text-text-wrap')) {
		block.classList.add('text-left');
	}
}
