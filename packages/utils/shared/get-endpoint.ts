export function getEndpoint(collection: string): string {
	if (collection.startsWith('superscribe_')) {
		return `/${collection.replace('superscribe_','')}`;
	}

	return `/items/${collection}`;
}
