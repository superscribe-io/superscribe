import { BaseException } from '@superscribe/exceptions';
export class InvalidCredentialsException extends BaseException {
    constructor(message = 'Invalid user credentials.') {
        super(message, 401, 'INVALID_CREDENTIALS');
    }
}
