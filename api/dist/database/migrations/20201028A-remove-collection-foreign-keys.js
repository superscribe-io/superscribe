export async function up(knex) {
    await knex.schema.alterTable('superscribe_fields', (table) => {
        table.dropForeign(['collection']);
    });
    await knex.schema.alterTable('superscribe_activity', (table) => {
        table.dropForeign(['collection']);
    });
    await knex.schema.alterTable('superscribe_permissions', (table) => {
        table.dropForeign(['collection']);
    });
    await knex.schema.alterTable('superscribe_presets', (table) => {
        table.dropForeign(['collection']);
    });
    await knex.schema.alterTable('superscribe_relations', (table) => {
        table.dropForeign(['one_collection']);
        table.dropForeign(['many_collection']);
    });
    await knex.schema.alterTable('superscribe_revisions', (table) => {
        table.dropForeign(['collection']);
    });
}
export async function down(knex) {
    await knex.schema.alterTable('superscribe_fields', (table) => {
        table.foreign('collection').references('superscribe_collections.collection');
    });
    await knex.schema.alterTable('superscribe_activity', (table) => {
        table.foreign('collection').references('superscribe_collections.collection');
    });
    await knex.schema.alterTable('superscribe_permissions', (table) => {
        table.foreign('collection').references('superscribe_collections.collection');
    });
    await knex.schema.alterTable('superscribe_presets', (table) => {
        table.foreign('collection').references('superscribe_collections.collection');
    });
    await knex.schema.alterTable('superscribe_relations', (table) => {
        table.foreign('one_collection').references('superscribe_collections.collection');
        table.foreign('many_collection').references('superscribe_collections.collection');
    });
    await knex.schema.alterTable('superscribe_revisions', (table) => {
        table.foreign('collection').references('superscribe_collections.collection');
    });
}
