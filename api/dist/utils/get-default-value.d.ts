import type { SchemaOverview } from '@superscribe/schema/types/overview';
import type { Column } from '@superscribe/schema';
export default function getDefaultValue(column: SchemaOverview[string]['columns'][string] | Column): string | boolean | number | Record<string, any> | any[] | null;
