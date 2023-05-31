export async function up(knex) {
    await knex.schema.alterTable('superscribe_users', (table) => {
        table.unique(['token']);
    });
}
export async function down(knex) {
    await knex.schema.alterTable('superscribe_users', (table) => {
        table.dropUnique(['token']);
    });
}
