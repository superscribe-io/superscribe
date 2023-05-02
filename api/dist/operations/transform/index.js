import { defineOperationApi, optionToObject } from '@superscribe/utils';
export default defineOperationApi({
    id: 'transform',
    handler: ({ json }) => {
        return optionToObject(json);
    },
});
