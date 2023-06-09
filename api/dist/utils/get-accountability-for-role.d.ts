import type { Accountability, SchemaOverview } from '@superscribe/types';
import type { Knex } from 'knex';
export declare function getAccountabilityForRole(role: null | string, context: {
    accountability: null | Accountability;
    schema: SchemaOverview;
    database: Knex;
}): Promise<Accountability>;
