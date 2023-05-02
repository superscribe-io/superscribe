import { BaseException } from '@superscribe/exceptions';

export class UnprocessableEntityException extends BaseException {
	constructor(message: string) {
		super(message, 422, 'UNPROCESSABLE_ENTITY');
	}
}
