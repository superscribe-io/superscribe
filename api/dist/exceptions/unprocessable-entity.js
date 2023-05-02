import { BaseException } from '@directus/exceptions';
export class UnprocessableEntityException extends BaseException {
    constructor(message) {
        super(message, 422, 'UNPROCESSABLE_ENTITY');
    }
}
