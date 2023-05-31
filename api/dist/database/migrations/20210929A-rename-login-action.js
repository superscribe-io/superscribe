export async function up(knex) {
    await knex('superscribe_activity')
        .update({
        action: 'login',
    })
        .where('action', '=', 'authenticate');
}
export async function down(knex) {
    await knex('superscribe_activity')
        .update({
        action: 'authenticate',
    })
        .where('action', '=', 'login');
}
