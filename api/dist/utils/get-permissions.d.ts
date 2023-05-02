import type { Accountability, Permission, SchemaOverview } from '@superscribe/types';
export declare function getPermissions(accountability: Accountability, schema: SchemaOverview): Promise<Permission[]>;
