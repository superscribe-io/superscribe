import { BaseException } from '@superscribe/exceptions';
export declare class InvalidPayloadException extends BaseException {
    constructor(message: string, extensions?: Record<string, unknown>);
}
