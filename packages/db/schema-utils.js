import extract from 'extract-pg-schema';
const {extractSchemas} = extract;

export default class SchemaUtils {
    /** @type {import("extract-pg-schema").Schema} */
    cache;

    /**
     * 
     * @param {string | object} connection pgsql connection string or connection object
     */
    constructor(connection_information) {
        this.connection_information = connection_information;
    }

    /**
     * Get information about the whole database
     * @param {boolean} force 
     * @returns {Promise<import("extract-pg-schema").Schema>}
     */
    async getSchema(force) {
        if (!this.cache || force)
            this.cache = await extractSchemas(this.connection_information);
        return this.cache;
    }

    /**
     * Get information about a single table in the database
     * @param {string} table_name 
     * @returns {Promise<import("extract-pg-schema").TableDetails>}
     */
    async getTable(table_name) {
        if (!this.cache)
            await getSchema();

        let table = this.cache.tables.find(
            table => table.name == table_name
        );

        return table;
    }

    /**
     * Get information about a single column in a table
     * @param {string} table_name 
     * @param {string} column_name 
     * @returns  {Promise<import("extract-pg-schema").TableColumn>}
     */
    async getColumn(table_name, column_name) {
        let table = await getTable(table_name);
        if (!table)
            return null;

        let column = table.columns.find(column => column.name == column_name);
        return column;
    }
}




