import type { Accountability } from '@superscribe/types';
import type { GraphQLError, GraphQLFormattedError } from 'graphql';
declare const processError: (accountability: Accountability | null, error: Readonly<GraphQLError>) => GraphQLFormattedError;
export default processError;
