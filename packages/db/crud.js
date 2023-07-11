import {EventEmitter} from 'events';

/**
 * @typedef {object} CreateOptions
 * @property {string[]} whitelist_columns - Columns permitted to be inserted
 * @property {string[]} blacklist_columns - Columns explicitly disallowed
 * @property {boolean} upsert - Whether to issue an upsert query if the record exists
 * @property {string[]} upsert_keys - The keys to use to determin upsert conflict. If not provided, 'id' will be assumed
 */

/**
 * @typedef {object} ReadOptions
 * @property {string[]} columns - Columns to include. If not specified, defaults to *
 */

export default class CRUD extends EventEmitter {
    async create(entity_name, data, options) {
        
        await sql`
        insert into ${entity_name} ${data}
        `;
    }

    async readOne(entity_name, id, options) {

    }

    async readMany(entity_name, filter, options) {

    }

    async update(entity_name, data, options) {

    }
}