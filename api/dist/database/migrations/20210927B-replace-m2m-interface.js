export async function up(knex) {
    await knex('superscribe_fields')
        .update({
        interface: 'files',
    })
        .where('interface', '=', 'list-m2m')
        .andWhere('special', '=', 'files');
}
export async function down(knex) {
    await knex('superscribe_fields')
        .update({
        interface: 'list-m2m',
    })
        .where('interface', '=', 'files')
        .andWhere('special', '=', 'files');
}
