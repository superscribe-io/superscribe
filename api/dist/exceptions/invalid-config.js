import { BaseException } from '@superscribe/exceptions';
export class InvalidConfigException extends BaseException {
    constructor(message = 'Invalid config', extensions) {
        super(message, 503, 'INVALID_CONFIG', extensions);
    }
}
