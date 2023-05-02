import type { Plural } from '@superscribe/types';
export declare function pluralize<T extends string>(str: T): Plural<T>;
export declare function depluralize<T extends string>(str: Plural<T>): T;
