import * as sharedExceptions from '@directus/exceptions';
export class GraphQLValidationException extends sharedExceptions.BaseException {
    constructor(extensions) {
        super('GraphQL validation error.', 400, 'GRAPHQL_VALIDATION_EXCEPTION', extensions);
    }
}
