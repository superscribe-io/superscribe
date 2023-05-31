import logger from '../../../logger.js';
import { RelationsService } from '../../../index.js';
import { getSchema } from '../../../utils/get-schema.js';
import getDatabase from '../../../database/index.js';

let data_update_tables = [
	'superscribe_activity',
    'superscribe_collections',
	'superscribe_fields',
	'superscribe_permissions',
	'superscribe_presets',
	'superscribe_revisions',
	'superscribe_shares',
]

export default async function start(): Promise<void> {
	const knex = getDatabase();
    let renamed_tables: string[] = [];

	logger.warn("Renaming directus tables...");
	try {

		await knex.transaction(async trx => {
			let result = await trx.raw(`
				select table_name 
				from information_schema.tables
				where table_type = 'BASE TABLE' 
					and table_schema = 'public'`
			);

			let table_names = result.rows.map((row: any) => row.table_name);

			for (let table_name of table_names) {
				if (!table_name.includes('directus'))
					continue;

				logger.info(`Renaming ${table_name}`);

				let new_name = table_name.replace('directus', 'superscribe');

				await trx.schema.renameTable(table_name, new_name);
				renamed_tables.push(new_name);
			}

			//update column names
			for (let table_name of renamed_tables) {
                let result = await trx.raw(`
                    select column_name from information_schema.columns
                        where table_catalog = '${process?.env['DB_DATABASE']}'
                        and table_schema = 'public'
                        and table_name = '${table_name}';
                `);
                let column_names = result.rows.map((row:any) => row.column_name);
				let rename_columns = column_names.filter((name:string) => name.includes('directus'));
				if(!rename_columns.length)
					continue;

				await trx.schema.table(table_name, function (t) {
					for (let column_name of rename_columns) {
						let new_name = column_name.replaceAll('directus', 'superscribe');
						logger.warn(`Renaming column ${column_name} to ${new_name}`)
						t.renameColumn(column_name, new_name);
					}
				})
			}

			//update collection names in data
			for (let table_name of data_update_tables) {
				logger.warn(`Updating collection names in ${table_name}...`);
				let has_table = await trx.schema.hasTable(table_name);
				if (!has_table)
					continue;

				await trx.raw(`
				update ${table_name}
				set collection = replace(collection, 'directus','superscribe')
				where collection like '%directus%';
			`);
			}

			//update relations
			logger.warn(`Updating collection names in superscribe_relations...`);
			await trx.raw(`
				update superscribe_relations
				set 
					one_collection = replace(one_collection, 'directus','superscribe')
				where one_collection like '%directus%';
			`);
			await trx.raw(`
				update superscribe_relations
				set 
					many_collection = replace(many_collection, 'directus','superscribe')
				where many_collection like '%directus%';
			`);
			await trx.raw(`
				update superscribe_relations
				set 
					one_field = replace(one_field, 'directus','superscribe')
				where one_field like '%directus%';
			`);
			await trx.raw(`
				update superscribe_relations
				set 
					many_field = replace(many_field, 'directus','superscribe')
				where many_field like '%directus%';
			`);
			await trx.raw(`
				update superscribe_relations
				set 
					junction_field = replace(junction_field, 'directus','superscribe')
				where junction_field like '%directus%';
			`);
			await trx.raw(`
				update superscribe_relations
				set 
					one_collection_field = replace(one_collection_field, 'directus','superscribe')
				where one_collection_field like '%directus%';
			`);
			await trx.raw(`
				update superscribe_relations
				set 
					sort_field = replace(sort_field, 'directus','superscribe')
				where sort_field like '%directus%';
			`);
		});

		let schema = await getSchema({ database: knex, bypassCache: true });
		let relations_service = new RelationsService({ accountability: { role: 'Administrator', admin: true }, schema });
		//update constraint names
		for (let table_name of renamed_tables) {
			let relations = await relations_service.readAll(table_name);
			for (let relation of relations) {
				//if there's not a schema, this is a system relationship that doesn't have a constraint
				//it's a "virtual" relationship maintained internally by superset
				if(!relation.schema)
					continue;
				await relations_service.updateOne(relation.collection, relation.field, relation);
			}
		}
	}
	catch (err:any) {
		debugger;
		logger.error(err.stack);
	}

}