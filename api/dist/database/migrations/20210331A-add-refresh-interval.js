export async function up(knex) {
    await knex.schema.alterTable('superscribe_presets', (table) => {
        table.integer('refresh_interval');
    });
}
export async function down(knex) {
    await knex.schema.alterTable('superscribe_presets', (table) => {
        table.dropColumn('refresh_interval');
    });
}
