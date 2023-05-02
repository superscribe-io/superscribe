import { test, expect, describe, vi } from 'vitest';

import { getVersionedHash } from './get-versioned-hash.js';

vi.mock('./package.js', () => ({
	version: '10.10.10',
}));

describe('getVersionedHash', () => {
	test.each([
		{
			input: {
				collection: 'test',
				meta: {
					accountability: 'all',
					archive_app_filter: true,
					archive_field: 'status',
					archive_value: 'archived',
					collapse: 'open',
					collection: 'test',
					color: null,
					display_template: null,
					group: null,
					hidden: false,
					icon: null,
					item_duplication_fields: null,
					note: null,
					singleton: false,
					sort: null,
					sort_field: null,
					translations: null,
					unarchive_value: 'draft',
				},
				schema: { name: 'test' },
			},
			expected: '8acdde88d26ea4142e224fe0b4bfdaab9ac9c923',
		},
		{
			input: {
				collection: 'test',
				field: 'id',
				meta: {
					collection: 'test',
					conditions: null,
					display: null,
					display_options: null,
					field: 'id',
					group: null,
					hidden: true,
					interface: 'input',
					note: null,
					options: null,
					readonly: true,
					required: false,
					sort: null,
					special: null,
					translations: null,
					validation: null,
					validation_message: null,
					width: 'full',
				},
				schema: {
					comment: null,
					data_type: 'integer',
					default_value: "nextval('test_id_seq'::regclass)",
					foreign_key_column: null,
					foreign_key_schema: null,
					foreign_key_table: null,
					generation_expression: null,
					has_auto_increment: true,
					is_generated: false,
					is_nullable: false,
					is_primary_key: true,
					is_unique: true,
					max_length: null,
					name: 'id',
					numeric_precision: 32,
					numeric_scale: 0,
					schema: 'public',
					table: 'test',
				},
				type: 'integer',
			},
			expected: '60f0d169cfa32799cae884e1bf33e0e49c3ff383',
		},
		{
			input: {
				collection: 'test_example',
				field: 'm2m',
				related_collection: 'test',
				meta: {
					id: 1,
					junction_field: 'example_id',
					many_collection: 'test_example',
					many_field: 'test_id',
					one_allowed_collections: null,
					one_collection: 'test',
					one_collection_field: null,
					one_deselect_action: 'nullify',
					one_field: 'm2m',
					sort_field: null,
				},
				schema: {
					table: 'test_example',
					column: 'test_id',
					foreign_key_table: 'test',
					foreign_key_column: 'id',
					constraint_name: 'test_example_test_id_foreign',
					on_update: 'NO ACTION',
					on_delete: 'SET NULL',
				},
			},
			expected: 'fa17767ef6646a72a6cfc211d36886d06896d0fc',
		},
	])('should return $expected', ({ input, expected }) => {
		expect(getVersionedHash(input)).toBe(expected);
	});
});
