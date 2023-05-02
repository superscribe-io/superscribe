import { defineOperationApi } from '@superscribe/utils';
export default defineOperationApi({
    id: 'sleep',
    handler: async ({ milliseconds }) => {
        await new Promise((resolve) => setTimeout(resolve, Number(milliseconds)));
    },
});
