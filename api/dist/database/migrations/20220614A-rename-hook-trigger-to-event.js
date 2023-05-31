export async function up(knex) {
    await knex('superscribe_flows').update({ trigger: 'event' }).where('trigger', '=', 'hook');
}
export async function down(knex) {
    await knex('superscribe_flows').update({ trigger: 'hook' }).where('trigger', '=', 'event');
}
