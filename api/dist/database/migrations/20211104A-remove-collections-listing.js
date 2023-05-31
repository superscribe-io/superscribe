export async function up(knex) {
    await knex.schema.alterTable('superscribe_roles', (table) => {
        table.dropColumn('collection_list');
    });
}
export async function down(knex) {
    await knex.schema.alterTable('superscribe_roles', (table) => {
        table.json('collection_list');
    });
}
