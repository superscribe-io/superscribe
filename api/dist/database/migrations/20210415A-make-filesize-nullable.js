import { getHelpers } from '../helpers/index.js';
export async function up(knex) {
    const helper = getHelpers(knex).schema;
    await helper.changeToType('superscribe_files', 'filesize', 'integer', {
        nullable: true,
        default: null,
    });
}
export async function down(knex) {
    const helper = getHelpers(knex).schema;
    await helper.changeToType('superscribe_files', 'filesize', 'integer', {
        nullable: false,
        default: 0,
    });
}
