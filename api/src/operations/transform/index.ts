import { defineOperationApi, optionToObject } from '@superscribe/utils';

type Options = {
	json: string | Record<string, any>;
};

export default defineOperationApi<Options>({
	id: 'transform',

	handler: ({ json }) => {
		return optionToObject(json);
	},
});
