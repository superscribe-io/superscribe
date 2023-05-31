export async function up(knex) {
    await knex('superscribe_fields').update({ interface: 'many-to-many' }).where({ interface: 'files' });
}
export async function down(_knex) {
    // Do nothing
}
