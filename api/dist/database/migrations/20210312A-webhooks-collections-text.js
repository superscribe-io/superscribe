import { getHelpers } from '../helpers/index.js';
export async function up(knex) {
    const helper = getHelpers(knex).schema;
    const type = helper.isOneOfClients(['oracle', 'cockroachdb']) ? 'text' : 'string';
    await helper.changeToType('superscribe_webhooks', 'collections', type);
}
export async function down(knex) {
    await getHelpers(knex).schema.changeToType('superscribe_webhooks', 'collections', 'string', {
        nullable: false,
        length: 255,
    });
}
