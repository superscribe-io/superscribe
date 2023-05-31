import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	await knex.schema.alterTable('superscribe_users', (table) => {
		table.json('auth_data');
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.alterTable('superscribe_users', (table) => {
		table.dropColumn('auth_data');
	});
}
