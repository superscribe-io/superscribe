import hash from 'object-hash';
import url from 'url';
import { getGraphqlQueryAndVariables } from './get-graphql-query-and-variables.js';
import { version } from './package.js';
export function getCacheKey(req) {
    const path = url.parse(req.originalUrl).pathname;
    const isGraphQl = path?.startsWith('/graphql');
    const info = {
        version,
        user: req.accountability?.user || null,
        path,
        query: isGraphQl ? getGraphqlQueryAndVariables(req) : req.sanitizedQuery,
    };
    const key = hash(info);
    return key;
}
