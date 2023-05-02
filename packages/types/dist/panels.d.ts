import type { Component, ComponentOptions } from 'vue';
import type { DeepPartial } from './misc.js';
import type { Field } from './fields.js';
import type { Query } from './query.js';
export type PanelQuery = {
    collection: string;
    query: Query;
    key?: string;
};
export interface PanelConfig {
    id: string;
    name: string;
    icon: string;
    description?: string;
    query?: (options: Record<string, any>) => PanelQuery | PanelQuery[] | undefined;
    variable?: true;
    component: Component;
    options: DeepPartial<Field>[] | {
        standard: DeepPartial<Field>[];
        advanced: DeepPartial<Field>[];
    } | ((ctx: Partial<Panel>) => DeepPartial<Field>[] | {
        standard: DeepPartial<Field>[];
        advanced: DeepPartial<Field>[];
    }) | ComponentOptions | null;
    minWidth: number;
    minHeight: number;
    skipUndefinedKeys?: string[];
}
export type Panel = {
    id: string;
    dashboard: string;
    show_header: boolean;
    name: string;
    icon: string;
    color: string;
    note: string;
    type: string;
    position_x: number;
    position_y: number;
    width: number;
    height: number;
    options: Record<string, any>;
    date_created: string;
    user_created: string;
};
