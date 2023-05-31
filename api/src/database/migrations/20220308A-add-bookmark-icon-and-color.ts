import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	await knex.schema.alterTable('superscribe_presets', (table) => {
		table.string('icon', 30).notNullable().defaultTo('bookmark_outline');
		table.string('color').nullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.alterTable('superscribe_presets', (table) => {
		table.dropColumn('icon');
		table.dropColumn('color');
	});
}
