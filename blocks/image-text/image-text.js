export default function decorate(block) {
  const imageParent = block.querySelector('picture').parentNode;
  imageParent.classList.add('image-text-image-wrap');

  const textParent = block.querySelector('h2,h3,h4').parentNode;
  textParent.classList.add('image-text-text-wrap');
}