export async function up(knex) {
    await knex.schema.alterTable('superscribe_notifications', (table) => {
        table.setNullable('sender');
    });
}
export async function down(knex) {
    await knex.schema.alterTable('superscribe_notifications', (table) => {
        table.dropNullable('sender');
    });
}
