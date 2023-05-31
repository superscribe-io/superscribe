import { getDefaultIndexName } from '../../utils/get-default-index-name.js';
const indexName = getDefaultIndexName('foreign', 'superscribe_settings', 'storage_default_folder');
export async function up(knex) {
    await knex.schema.alterTable('superscribe_settings', (table) => {
        table
            .uuid('storage_default_folder')
            .references('id')
            .inTable('superscribe_folders')
            .withKeyName(indexName)
            .onDelete('SET NULL');
    });
}
export async function down(knex) {
    await knex.schema.alterTable('superscribe_files', (table) => {
        table.dropForeign(['storage_default_folder'], indexName);
        table.dropColumn('storage_default_folder');
    });
}
