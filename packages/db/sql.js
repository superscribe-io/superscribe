import postgres from 'postgres';

const cache = {};

export default function getSql(connection_information) {
    let cache_key = JSON.stringify(connection_information);
    let sql = cache[cache_key];
    if(!sql) {
        sql = postgres(connection_information); 
        cache[cache_key] = sql;
    }
    return sql;
}
