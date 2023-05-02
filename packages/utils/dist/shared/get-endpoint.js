export function getEndpoint(collection) {
    if (collection.startsWith('superscribe_')) {
        return `/${collection.substring(9)}`;
    }
    return `/items/${collection}`;
}
