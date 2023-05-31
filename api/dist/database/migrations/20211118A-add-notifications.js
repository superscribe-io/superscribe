export async function up(knex) {
    await knex.schema.createTable('superscribe_notifications', (table) => {
        table.increments();
        table.timestamp('timestamp').notNullable();
        table.string('status').defaultTo('inbox');
        table.uuid('recipient').notNullable().references('id').inTable('superscribe_users').onDelete('CASCADE');
        table.uuid('sender').notNullable().references('id').inTable('superscribe_users');
        table.string('subject').notNullable();
        table.text('message');
        table.string('collection', 64);
        table.string('item');
    });
    await knex.schema.alterTable('superscribe_users', (table) => {
        table.boolean('email_notifications').defaultTo(true);
    });
    await knex('superscribe_users').update({ email_notifications: true });
}
export async function down(knex) {
    await knex.schema.dropTable('superscribe_notifications');
    await knex.schema.alterTable('superscribe_users', (table) => {
        table.dropColumn('email_notifications');
    });
}
