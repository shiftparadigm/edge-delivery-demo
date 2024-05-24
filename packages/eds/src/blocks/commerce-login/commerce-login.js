import { readBlockConfig } from '@shiftparadigm/eds-core/utils/readBlockConfig';
import './commerce-login.css';

export default function decorate(block) {
	const config = readBlockConfig(block);

	const content = document.createRange().createContextualFragment(`<div>
    Commerce Account drop-in (Login)
    <pre>${JSON.stringify(config, null, 2)}</pre>
  </div>`);

	block.textContent = '';
	block.append(content);
}
