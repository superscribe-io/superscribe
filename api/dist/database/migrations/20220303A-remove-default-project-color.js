import { getHelpers } from '../helpers/index.js';
export async function up(knex) {
    const helper = getHelpers(knex).schema;
    await helper.changeToType('superscribe_settings', 'project_color', 'string', {
        nullable: true,
        default: null,
        length: 50,
    });
}
export async function down(knex) {
    const helper = getHelpers(knex).schema;
    await helper.changeToType('superscribe_settings', 'project_color', 'string', {
        nullable: true,
        default: '#00C897',
        length: 10,
    });
}
