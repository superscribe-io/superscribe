import QueryBuilder from "./query-builder.js";
import SchemaUtils from "./schema-utils.js";
import getSql from "./sql.js";
import knex from 'knex';

export default class Database {
    /**
     * @type {sql}
     */
    get sql() {
        return getSql(this.connection_information);
    }

    /** @type {import("extract-pg-schema").Schema} */
    get schema() {
        return this._schema
    }

    get knex() {
        return this._knex;
    }

    constructor(connection_information) {
        this.connection_information = connection_information;
        this._knex = knex({
            connection: connection_information
        });
    }

    async initSchema() {
        let schema_utils = new SchemaUtils(connection_information);
        await schema_utils.getSchema();
        this._schema = schema_utils;
    }

    async executePostgrestQuery(table_name, query, options) {
        if(!this.schema)
            await this.initSchema();

        let query_builder = new QueryBuilder(table_name, query, this.schema, this.knex, options);
        let sql_query = await query_builder.buildQuery();
        let sql = getSql(this.connection_information);
        let results = await sql`${sql_query}`;
        return results;
    }

}