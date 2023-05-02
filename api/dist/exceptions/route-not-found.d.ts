import { BaseException } from '@superscribe/exceptions';
export declare class RouteNotFoundException extends BaseException {
    constructor(path: string);
}
