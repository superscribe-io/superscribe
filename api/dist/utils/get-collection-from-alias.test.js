import { expect, it } from 'vitest';
import { getCollectionFromAlias } from './get-collection-from-alias.js';
it('Returns the correct collection', () => {
    const aliasMap = {
        author: { alias: 'aaaaa', collection: 'directus_users' },
        'author.role': { alias: 'bbbbb', collection: 'directus_roles' },
        'author.role.org': { alias: 'ccccc', collection: 'organisation' },
        'author.role.org.admin': { alias: 'ddddd', collection: 'directus_users' },
    };
    const collection = getCollectionFromAlias('ccccc', aliasMap);
    expect(collection).toBe('organisation');
});
it('Returns undefined if alias does not exist', () => {
    const aliasMap = {};
    const collection = getCollectionFromAlias('abcde', aliasMap);
    expect(collection).toBeUndefined();
});
