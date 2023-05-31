export async function up(knex) {
    await knex('superscribe_fields')
        .update({ special: knex.raw(`REPLACE(??, 'geometry,', 'geometry.')`, ['special']) })
        .where('special', 'like', '%geometry,Point%')
        .orWhere('special', 'like', '%geometry,LineString%')
        .orWhere('special', 'like', '%geometry,Polygon%')
        .orWhere('special', 'like', '%geometry,MultiPoint%')
        .orWhere('special', 'like', '%geometry,MultiLineString%')
        .orWhere('special', 'like', '%geometry,MultiPolygon%');
}
export async function down(knex) {
    await knex('superscribe_fields')
        .update({ special: knex.raw(`REPLACE(??, 'geometry.', 'geometry,')`, ['special']) })
        .where('special', 'like', '%geometry.Point%')
        .orWhere('special', 'like', '%geometry.LineString%')
        .orWhere('special', 'like', '%geometry.Polygon%')
        .orWhere('special', 'like', '%geometry.MultiPoint%')
        .orWhere('special', 'like', '%geometry.MultiLineString%')
        .orWhere('special', 'like', '%geometry.MultiPolygon%');
}
