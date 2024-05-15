export default function decorate(block) {
  const mainHeadingSelector = `
    div > div > h2,
    div > div > h3,
    div > div > h4
  `;
  const textContentSelector = '.column-cards > div:last-of-type';

  const headingParent = block.querySelector(mainHeadingSelector).parentNode;
  const textWrapper = block.querySelector(textContentSelector);

  headingParent.classList.add('column-cards-main-heading-wrap');
  textWrapper.classList.add('column-cards-text-wrap');
}
