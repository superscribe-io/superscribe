import { defineOperationApi, optionToString } from '@superscribe/utils';
import logger from '../../logger.js';
export default defineOperationApi({
    id: 'log',
    handler: ({ message }) => {
        logger.info(optionToString(message));
    },
});
