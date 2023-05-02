import { BaseException } from '@superscribe/exceptions';
type Extensions = {
    collection: string;
    field: string;
    invalid?: string;
};
export declare class InvalidForeignKeyException extends BaseException {
    constructor(field: string | null, extensions?: Extensions);
}
export {};
