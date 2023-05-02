import { BaseException } from '@superscribe/exceptions';
type Extensions = {
    allow: string[];
};
export declare class MethodNotAllowedException extends BaseException {
    constructor(message: string | undefined, extensions: Extensions);
}
export {};
