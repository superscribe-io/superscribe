import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	await knex.schema.alterTable('superscribe_roles', (table) => {
		table.dropColumn('collection_list');
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.alterTable('superscribe_roles', (table) => {
		table.json('collection_list');
	});
}
