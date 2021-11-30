export function deepMerge(target:object, ...sources:object[]) {
	for (let source of sources) {
		for (let property in source) {
			let value = source[property]
			if (typeof value == 'object' && value !== null) {
				if (!target[property]) target[property] = Array.isArray(value) ? [] : {}
				deepMerge(target[property], source[property])
			} else {
				target[property] = value
			}
		}
	}
}
