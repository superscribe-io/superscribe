import type { Collection, CollectionType } from '@superscribe/types';
/**
 * Get the type of collection. One of alias | table. (And later: view)
 *
 * @param collection Collection object to get the type of
 * @returns collection type
 */
export declare function getCollectionType(collection: Collection): CollectionType;
