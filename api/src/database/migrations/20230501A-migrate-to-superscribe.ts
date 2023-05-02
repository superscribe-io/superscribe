import type { Knex } from 'knex';

let directus_tables = [
	'directus_activity',
	'directus_collections',
	'directus_dashboards',
	'directus_fields',
	'directus_files',
	'directus_flows',
	'directus_folders',
	'directus_migrations',
	'directus_notifications',
	'directus_operations',
	'directus_panels',
	'directus_permissions',
	'directus_presets',
	'directus_relations',
	'directus_revisions',
	'directus_roles',
	'directus_sessions',
	'directus_settings',
	'directus_shares',
	'directus_users',
	'directus_webhooks',
];

let data_update_tables = [
	'superscribe_activity',
	'superscribe_fields',
	'superscribe_permissions',
	'superscribe_presets',
	'superscribe_revisions',
	'superscribe_shares',
]

export async function up(knex: Knex): Promise<void> {
	console.warn("Renaming directus tables...");
	for(let table_name of directus_tables) {
		let has_table = await knex.schema.hasTable(table_name);
		if(!has_table)
			continue;

		console.log(`Renaming ${table_name}`);

		let new_name = table_name.replace('directus','superscribe');

		await knex.schema.renameTable(table_name, new_name);
	}

	//update collection names in data
	for(let table_name of data_update_tables) {
		console.warn(`Updating collection names in ${table_name}...`);
		let has_table = await knex.schema.hasTable(table_name);
		if(!has_table)
			continue;

		await knex.raw(`
			update ${table_name}
			set collection = replace(collection, 'directus','superscribe')
			where collection like 'directus_%';
		`);
	}

	//update relations
	let has_table = await knex.schema.hasTable('superscribe_relations');``
	if(has_table) {
		console.warn(`Updating collection names in superscribe_relations...`);
		await knex.raw(`
			update superscribe_relations
			set 
				one_collection = replace(one_collection, 'directus','superscribe')
			where one_collection like 'directus_%';
		`);
		await knex.raw(`
			update superscribe_relations
			set 
				many_collection = replace(many_collection, 'directus','superscribe')
			where many_collection like 'directus_%';
		`);
	}
}

export async function down(knex: Knex): Promise<void> {
	//update collection names in data
	for(let table_name of data_update_tables) {
		console.warn(`Updating collection names in ${table_name}...`);
		let has_table = await knex.schema.hasTable(table_name);
		if(!has_table)
			continue;

		await knex.raw(`
			update ${table_name}
			set collection = replace(collection, 'superscribe','directus')
			where collection like 'superscribe_%';
		`);
	}

	//update relations
	let has_table = await knex.schema.hasTable('superscribe_relations');``
	if(has_table) {
		console.warn(`Updating collection names in superscribe_relations...`);
		await knex.raw(`
			update superscribe_relations
			set 
				one_collection = replace(one_collection, 'superscribe','directus')
			where one_collection like 'superscribe_%';
		`);
		await knex.raw(`
			update superscribe_relations
			set 
				many_collection = replace(many_collection, 'superscribe','directus')
			where many_collection like 'superscribe_%';
		`);
	}
	console.warn("Renaming superscribe tables...");
	for(let table_name of directus_tables) {
		let new_name = table_name.replace('directus','superscribe');
		let has_table = await knex.schema.hasTable(new_name);
		if(!has_table)
			continue;

		await knex.schema.renameTable(new_name, table_name);
	}

}
