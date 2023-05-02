import { BaseException } from '@superscribe/exceptions';
export class InvalidQueryException extends BaseException {
    constructor(message) {
        super(message, 400, 'INVALID_QUERY');
    }
}
