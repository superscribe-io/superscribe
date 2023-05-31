import { getHelpers } from '../helpers/index.js';
export async function up(knex) {
    const helper = getHelpers(knex).schema;
    await knex.schema.alterTable('superscribe_relations', (table) => {
        table.dropColumns('many_primary', 'one_primary');
        table.string('one_deselect_action').defaultTo('nullify');
    });
    await knex('superscribe_relations').update({ one_deselect_action: 'nullify' });
    await helper.changeToType('superscribe_relations', 'sort_field', 'string', {
        length: 64,
    });
    await helper.changeToType('superscribe_relations', 'one_deselect_action', 'string', {
        nullable: false,
        default: 'nullify',
    });
}
export async function down(knex) {
    const helper = getHelpers(knex).schema;
    await helper.changeToType('superscribe_relations', 'sort_field', 'string', {
        length: 255,
    });
    await knex.schema.alterTable('superscribe_relations', (table) => {
        table.dropColumn('one_deselect_action');
        table.string('many_primary', 64);
        table.string('one_primary', 64);
    });
}
