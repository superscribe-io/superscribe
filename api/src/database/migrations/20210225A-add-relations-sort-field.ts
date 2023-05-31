import { parseJSON } from '@superscribe/utils';
import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	await knex.schema.alterTable('superscribe_relations', (table) => {
		table.string('sort_field');
	});

	const fieldsWithSort = await knex
		.select('collection', 'field', 'options')
		.from('superscribe_fields')
		.whereIn('interface', ['one-to-many', 'm2a-builder', 'many-to-many']);

	for (const field of fieldsWithSort) {
		const options = typeof field.options === 'string' ? parseJSON(field.options) : field.options ?? {};

		if ('sortField' in options) {
			await knex('superscribe_relations')
				.update({
					sort_field: options.sortField,
				})
				.where({
					one_collection: field.collection,
					one_field: field.field,
				});
		}
	}
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.alterTable('superscribe_relations', (table) => {
		table.dropColumn('sort_field');
	});
}
