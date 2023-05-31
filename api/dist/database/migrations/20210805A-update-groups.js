import { parseJSON } from '@superscribe/utils';
export async function up(knex) {
    const groups = await knex.select('*').from('superscribe_fields').where({ interface: 'group-standard' });
    const raw = [];
    const detail = [];
    for (const group of groups) {
        const options = typeof group.options === 'string' ? parseJSON(group.options) : group.options || {};
        if (options.showHeader === true) {
            detail.push(group);
        }
        else {
            raw.push(group);
        }
    }
    for (const field of raw) {
        await knex('superscribe_fields').update({ interface: 'group-raw' }).where({ id: field.id });
    }
    for (const field of detail) {
        await knex('superscribe_fields').update({ interface: 'group-detail' }).where({ id: field.id });
    }
}
export async function down(knex) {
    await knex('superscribe_fields')
        .update({
        interface: 'group-standard',
    })
        .where({ interface: 'group-detail' })
        .orWhere({ interface: 'group-raw' });
}
