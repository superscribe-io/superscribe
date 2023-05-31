export async function up(knex) {
    await knex.schema.alterTable('superscribe_permissions', (table) => {
        table.dropColumn('limit');
    });
}
export async function down(knex) {
    await knex.schema.alterTable('superscribe_permissions', (table) => {
        table.integer('limit').unsigned();
    });
}
