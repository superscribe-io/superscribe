export async function up(knex) {
    await knex.schema.alterTable('superscribe_webhooks', (table) => {
        table.json('headers');
    });
}
export async function down(knex) {
    await knex.schema.alterTable('superscribe_webhooks', (table) => {
        table.dropColumn('headers');
    });
}
