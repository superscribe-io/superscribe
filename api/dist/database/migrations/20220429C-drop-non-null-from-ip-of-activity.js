export async function up(knex) {
    await knex.schema.alterTable('superscribe_activity', (table) => {
        table.setNullable('ip');
    });
}
export async function down(knex) {
    await knex.schema.alterTable('superscribe_activity', (table) => {
        table.dropNullable('ip');
    });
}
