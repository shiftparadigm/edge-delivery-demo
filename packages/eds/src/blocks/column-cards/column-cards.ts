import './column-cards.css';
export default function decorate(block: Element) {
	const { firstElementChild } = block;
	const divTree = firstElementChild?.children;
	const hasMainHeading = divTree?.length === 1;

	// add special CSS for heading cell that goes full-width
	if (hasMainHeading) {
		firstElementChild?.classList.add('column-cards-main-heading-wrap');
	}

	const textContentSelector = '.column-cards > div:last-of-type';
	const textWrapper = block.querySelector(textContentSelector);
	textWrapper?.classList.add('column-cards-text-wrap');
}
