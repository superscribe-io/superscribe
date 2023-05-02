exports.seed = async function (knex) {
	if (process.env.TEST_LOCAL) {
		await knex('superscribe_collections').del();
		await knex('superscribe_relations').del();
		await knex('superscribe_roles').del();
		await knex('superscribe_users').del();
	}
};
