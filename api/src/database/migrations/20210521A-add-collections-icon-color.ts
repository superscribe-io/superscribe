import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	await knex.schema.alterTable('superscribe_collections', (table) => {
		table.string('color').nullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.alterTable('superscribe_collections', (table) => {
		table.dropColumn('color');
	});
}
