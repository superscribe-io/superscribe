export function getEndpoint(collection: string): string {
	if (collection.startsWith('superscribe_')) {
		return `/${collection.substring(9)}`;
	}

	return `/items/${collection}`;
}
