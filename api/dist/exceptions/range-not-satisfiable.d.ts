import { BaseException } from '@superscribe/exceptions';
import type { Range } from '@superscribe/storage';
export declare class RangeNotSatisfiableException extends BaseException {
    constructor(range?: Range);
}
