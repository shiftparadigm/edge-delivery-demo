import Ajv from 'ajv';

export default class AcdlValidator {
	constructor() {
		this.ajv = new Ajv();
	}
	handle(item, event) {
		const schema = event ? item.event : Object.keys(item)[0];
		const validate = this.ajv.getSchema(schema);
		if (!validate) {
			console.error('Could not find schema for', schema, item);
			return;
		}
		const valid = validate(item);
		if (valid) {
			console.debug('Schema of item is valid', schema, item);
		} else {
			console.error(
				'Validation of item against schema failed',
				schema,
				item,
				validate.errors,
			);
		}
	}
	addSchema(schema, name) {
		this.ajv.addSchema(schema, name);
	}
	start() {
		window.adobeDataLayer.push((dl) => {
			dl.addEventListener('adobeDataLayer:change', (item) =>
				this.handle(item, false),
			);
			dl.addEventListener('adobeDataLayer:event', (item) =>
				this.handle(item, true),
			);
		});
		console.debug('AcdlValidator started');
	}
}
console.debug('AcdlValidator loaded');
