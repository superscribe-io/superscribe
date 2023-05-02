import type { SchemaOverview } from '@superscribe/types';
import type { Diff } from 'deep-diff';
import type { Knex } from 'knex';
import type { Snapshot, SnapshotDiff, SnapshotField } from '../types/index.js';
export declare function applyDiff(currentSnapshot: Snapshot, snapshotDiff: SnapshotDiff, options?: {
    database?: Knex;
    schema?: SchemaOverview;
}): Promise<void>;
export declare function isNestedMetaUpdate(diff: Diff<SnapshotField | undefined>): boolean;
