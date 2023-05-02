export function getEndpoint(collection) {
    if (collection.startsWith('superscribe_')) {
        return `/${collection.replace('superscribe_', '')}`;
    }
    return `/items/${collection}`;
}
