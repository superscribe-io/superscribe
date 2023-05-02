import type { Filter } from '@superscribe/types';
export declare function mergeFilters(filterA: Filter | null, filterB: Filter | null, strategy?: 'and' | 'or'): Filter | null;
