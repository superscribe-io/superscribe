import { getDatabaseVersion } from '../../../../database/index.js';
import { SchemaHelper } from '../types.js';
export class SchemaHelperMySQL extends SchemaHelper {
    applyMultiRelationalSort(knex, dbQuery, table, primaryKey, orderByString, orderByFields) {
        if (getDatabaseVersion()?.startsWith('5.7')) {
            dbQuery.orderByRaw(`?? asc, ${orderByString}`, [`${table}.${primaryKey}`, ...orderByFields]);
            dbQuery = knex
                .select(knex.raw(`??, ( @rank := IF ( @cur_id = deep.${primaryKey}, @rank + 1, 1 ) ) AS superscribe_row_number, ( @cur_id := deep.${primaryKey} ) AS current_id`, 'deep.*'))
                .from(knex.raw('? as ??, (SELECT @rank := 0,  @cur_id := null) vars', [dbQuery, 'deep']));
            return dbQuery;
        }
        return super.applyMultiRelationalSort(knex, dbQuery, table, primaryKey, orderByString, orderByFields);
    }
}
