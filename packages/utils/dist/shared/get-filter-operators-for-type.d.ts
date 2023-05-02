import type { ClientFilterOperator, Type } from '@superscribe/types';
type GetFilterOperationsForTypeOptions = {
    includeValidation?: boolean;
};
export declare function getFilterOperatorsForType(type: Type, opts?: GetFilterOperationsForTypeOptions): ClientFilterOperator[];
export {};
