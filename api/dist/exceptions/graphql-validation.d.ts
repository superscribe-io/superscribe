import * as sharedExceptions from '@superscribe/exceptions';
export declare class GraphQLValidationException extends sharedExceptions.BaseException {
    constructor(extensions: Record<string, any>);
}
