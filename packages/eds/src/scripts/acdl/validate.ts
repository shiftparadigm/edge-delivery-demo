const { default: AcdlValidator } = await import('./validator.js');

const validator = new AcdlValidator();

const regex = /^\.\/schemas\/(.+)\.json$/;
const schemas = import.meta.glob('./schemas/*.json');

for (const [key, value] of Object.entries(schemas)) {
	const regexMatch = regex.exec(key);
	if (!regexMatch) continue;
	const schemaName = regexMatch[1];
	const json = await value();
	validator.addSchema(json, schemaName);
}

validator.start();
