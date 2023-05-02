import knex from 'knex';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import path from 'path';
import { promisify } from 'util';
const __dirname = dirname(fileURLToPath(import.meta.url));
export default function createDBConnection(client, credentials) {
    let connection = {};
    if (client === 'sqlite3') {
        const { filename } = credentials;
        connection = {
            filename: filename,
        };
    }
    else {
        const { host, port, database, user, password } = credentials;
        connection = {
            host: host,
            port: Number(port),
            database: database,
            user: user,
            password: password,
        };
        if (client === 'pg' || client === 'cockroachdb') {
            const { ssl } = credentials;
            connection.ssl = ssl;
        }
        if (client === 'mssql') {
            const { options__encrypt } = credentials;
            connection = {
                ...connection,
                encrypt: options__encrypt,
            };
        }
    }
    const knexConfig = {
        client: client,
        connection: connection,
        seeds: {
            extension: 'js',
            directory: path.resolve(__dirname, '../../database/seeds/'),
        },
        pool: {},
    };
    if (client === 'sqlite3') {
        knexConfig.useNullAsDefault = true;
    }
    if (client === 'cockroachdb') {
        knexConfig.pool.afterCreate = async (conn, callback) => {
            const run = promisify(conn.query.bind(conn));
            await run('SET serial_normalization = "sql_sequence"');
            await run('SET default_int_size = 4');
            callback(null, conn);
        };
    }
    const db = knex.default(knexConfig);
    return db;
}
