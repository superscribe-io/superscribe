import { defineOperationApi, validatePayload } from '@superscribe/utils';
export default defineOperationApi({
    id: 'condition',
    handler: ({ filter }, { data }) => {
        const errors = validatePayload(filter, data, { requireAll: true });
        if (errors.length > 0) {
            throw errors;
        }
        else {
            return null;
        }
    },
});
