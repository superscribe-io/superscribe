import { BaseException } from '@superscribe/exceptions';
export class MethodNotAllowedException extends BaseException {
    constructor(message = 'Method not allowed.', extensions) {
        super(message, 405, 'METHOD_NOT_ALLOWED', extensions);
    }
}
