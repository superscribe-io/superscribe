import type { SchemaOverview } from '@superscribe/types';
import type { Knex } from 'knex';
import type { Snapshot } from '../types/index.js';
export declare function getSnapshot(options?: {
    database?: Knex;
    schema?: SchemaOverview;
}): Promise<Snapshot>;
