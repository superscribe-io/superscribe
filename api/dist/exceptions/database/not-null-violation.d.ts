import { BaseException } from '@superscribe/exceptions';
type Exceptions = {
    collection: string;
    field: string;
};
export declare class NotNullViolationException extends BaseException {
    constructor(field: string, exceptions?: Exceptions);
}
export {};
