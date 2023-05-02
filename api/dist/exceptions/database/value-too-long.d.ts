import { BaseException } from '@superscribe/exceptions';
type Extensions = {
    collection: string;
    field: string | null;
};
export declare class ValueTooLongException extends BaseException {
    constructor(field: string | null, extensions?: Extensions);
}
export {};
