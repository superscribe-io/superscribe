type Options = {
    recipient: string;
    subject: string;
    message?: unknown | null;
    permissions: string;
};
declare const _default: import("@superscribe/types").OperationApiConfig<Options>;
export default _default;
