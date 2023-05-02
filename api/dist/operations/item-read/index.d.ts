import type { PrimaryKey } from '@superscribe/types';
type Options = {
    collection: string;
    key?: PrimaryKey | PrimaryKey[] | null;
    query?: Record<string, any> | string | null;
    emitEvents: boolean;
    permissions: string;
};
declare const _default: import("@superscribe/types").OperationApiConfig<Options>;
export default _default;
