export default function decorate(block: Element) {
	const fullSpanPicture = block.querySelector('div > picture');
	if (fullSpanPicture) fullSpanPicture.classList.add('full-span-picture');

	if (block.classList.contains('gradient-headline')) {
		const gradientHeadlineTextWrapper = block.firstElementChild;
		gradientHeadlineTextWrapper?.classList.add(
			'gradient-headline-text-wrapper',
		);
	}

	const textWrappers = Array.from(block.querySelectorAll('div:has(div + div)'));
	textWrappers.forEach((wrapper) => {
		wrapper.classList.add('text-wrapper');
	});
}
