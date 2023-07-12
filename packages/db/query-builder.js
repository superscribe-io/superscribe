import { PostgrestQueryParser } from '@supabase-cache-helpers/postgrest-filter';
import knex from 'knex';
import SchemaUtils from './schema-utils.js';

const OPERATOR_MAP = {
    eq: '=',
    gt: '>',
    gte: '>=',
    lt: '<',
    lte: '<=',
    neq: '!=',
    like: 'LIKE',
    ilike: 'ILIKE',
    match: '~',
    imatch: '~*',
    in: 'IN',
    is: 'IS',
    isdistinct: 'IS DISTINCT FROM',
    fts: '@@',
    plfts: '@@',
    phfts: '@@',
    wfts: '@@',
    cs: '@>',
    cd: '<@',
    ov: '&&',
    sl: '<<',
    sr: '>>',
    nxr: '&<',
    nxl: '&>',
    adj: '-|-',
    not: 'NOT',
    or: 'OR',
    and: 'AND',
    all: 'ALL',
    any: 'ANY',
}

export default class QueryBuilder {

    /**
     * 
     * @param {string} table_name 
     * @param {string} postgrest_query 
     * @param {SchemaUtils} schema_utils 
     * @param {QueryBuilder} knex 
     * @param {*} options 
     */
    constructor(table_name, postgrest_query, schema_utils, knex, options) {
        this.postgrest_query = postgrest_query;
        this.parser = new PostgrestQueryParser(postgrest_query);
        this.table_name = table_name;
        this.schema_utils = schema_utils;
        /** @type {import("knex").Knex */
        this.knex = knex(table_name);

    }

    selectColumns() {
        let columns = this.parser.paths.map(path => {
            let parts = path.split('.');
            let column_name; 
            if(parts.length > 1)
                column_name = parts[parts.length - 2] + "." + parts[parts.length - 1]
            else
                column_name = path;

            if(path.alias) {
                let parts = path.alias.split('.');
                let alias_name;
                if(parts.length > 1)
                    alias_name = parts[parts.length - 2] + "." + parts[parts.length - 1]
                else
                    alias_name = path;

                return {alias_name: column_name}
            }

            return column_name;
        });
        this.knex.columns(columns);
    }

    async addJoins() {
        for(let path of this.parser.paths) {
            let parts = path.path.split('.');
            let table = parts[parts.length - 1];
            //self-joins must be aliased
            if(table == this.table_name) 
                if(!path.alias)
                    continue;

            let table_schema = await this.schema_utils.getTable(table);
            table_schema.
            if(path.declaration.includes('!inner'))
                this.knex.innerJoin(table)
        }

    }

    async run() {
        this.selectColumns();
        await this.addJoins();
        this.table_schema = await this.schema_utils.getTable(this.table_name);
        let results = await this.buildQuery();
        return results;
    }

    /**
     * 
     * @param {import("@supabase-cache-helpers/postgrest-filter").FilterDefinitions} node
     * @param {Knex} knex - knex builder instance
     * @param {boolean} or - Should this be an 'or' query
     * @param {number} depth - recursion depth tracker
     */
    async buildQuery(node, knex, or, depth) {
        if (!node)
            node = this.parser.filters;
        if (!knex)
            knex = this.knex;
        if (!depth)
            depth = 0;

        for (let filter of node) {
            if (filter.and)
                await this.buildQuery(filter.and, knex, false, depth + 1);
            if (filter.or)
                await this.buildQuery(filter.or, knex, true, depth + 1);

            if(or)
                knex.orWhere(filter.alias || filter.path, OPERATOR_MAP[filter.operator], filter.value)
            else
                knex.where(filter.alias || filter.path, OPERATOR_MAP[filter.operator], filter.value)

        }
        return knex;
    }
}