import getDatabase from '../../../database/index.js';
import { ContainsNullValuesException } from '../contains-null-values.js';
import { InvalidForeignKeyException } from '../invalid-foreign-key.js';
import { NotNullViolationException } from '../not-null-violation.js';
import { RecordNotUniqueException } from '../record-not-unique.js';
import { ValueOutOfRangeException } from '../value-out-of-range.js';
import { ValueTooLongException } from '../value-too-long.js';
var MSSQLErrorCodes;
(function (MSSQLErrorCodes) {
    MSSQLErrorCodes[MSSQLErrorCodes["FOREIGN_KEY_VIOLATION"] = 547] = "FOREIGN_KEY_VIOLATION";
    MSSQLErrorCodes[MSSQLErrorCodes["NOT_NULL_VIOLATION"] = 515] = "NOT_NULL_VIOLATION";
    MSSQLErrorCodes[MSSQLErrorCodes["NUMERIC_VALUE_OUT_OF_RANGE"] = 220] = "NUMERIC_VALUE_OUT_OF_RANGE";
    MSSQLErrorCodes[MSSQLErrorCodes["UNIQUE_VIOLATION"] = 2601] = "UNIQUE_VIOLATION";
    MSSQLErrorCodes[MSSQLErrorCodes["VALUE_LIMIT_VIOLATION"] = 2628] = "VALUE_LIMIT_VIOLATION";
})(MSSQLErrorCodes || (MSSQLErrorCodes = {}));
export async function extractError(error) {
    switch (error.number) {
        case MSSQLErrorCodes.UNIQUE_VIOLATION:
        case 2627:
            return await uniqueViolation(error);
        case MSSQLErrorCodes.NUMERIC_VALUE_OUT_OF_RANGE:
            return numericValueOutOfRange(error);
        case MSSQLErrorCodes.VALUE_LIMIT_VIOLATION:
            return valueLimitViolation(error);
        case MSSQLErrorCodes.NOT_NULL_VIOLATION:
            return notNullViolation(error);
        case MSSQLErrorCodes.FOREIGN_KEY_VIOLATION:
            return foreignKeyViolation(error);
    }
    return error;
}
async function uniqueViolation(error) {
    /**
     * NOTE:
     * SQL Server doesn't return the name of the offending column when a unique constraint is thrown:
     *
     * insert into [articles] ([unique]) values (@p0)
     * - Violation of UNIQUE KEY constraint 'UQ__articles__5A062640242004EB'.
     * Cannot insert duplicate key in object 'dbo.articles'. The duplicate key value is (rijk).
     *
     * While it's not ideal, the best next thing we can do is extract the column name from
     * information_schema when this happens
     */
    const betweenQuotes = /'([^']+)'/g;
    const betweenParens = /\(([^)]+)\)/g;
    const quoteMatches = error.message.match(betweenQuotes);
    const parenMatches = error.message.match(betweenParens);
    if (!quoteMatches || !parenMatches)
        return error;
    const keyName = quoteMatches[1].slice(1, -1);
    let collection = quoteMatches[0].slice(1, -1);
    let field = null;
    if (keyName) {
        const database = getDatabase();
        const constraintUsage = await database
            .select('sys.columns.name as field', database.raw('OBJECT_NAME(??) as collection', ['sys.columns.object_id']))
            .from('sys.indexes')
            .innerJoin('sys.index_columns', (join) => {
            join
                .on('sys.indexes.object_id', '=', 'sys.index_columns.object_id')
                .andOn('sys.indexes.index_id', '=', 'sys.index_columns.index_id');
        })
            .innerJoin('sys.columns', (join) => {
            join
                .on('sys.index_columns.object_id', '=', 'sys.columns.object_id')
                .andOn('sys.index_columns.column_id', '=', 'sys.columns.column_id');
        })
            .where('sys.indexes.name', '=', keyName)
            .first();
        collection = constraintUsage?.collection;
        field = constraintUsage?.field;
    }
    const invalid = parenMatches[parenMatches.length - 1]?.slice(1, -1);
    return new RecordNotUniqueException(field, {
        collection,
        field,
        invalid,
    });
}
function numericValueOutOfRange(error) {
    const betweenBrackets = /\[([^\]]+)\]/g;
    const bracketMatches = error.message.match(betweenBrackets);
    if (!bracketMatches)
        return error;
    const collection = bracketMatches[0].slice(1, -1);
    /**
     * NOTE
     * MS SQL Doesn't return the offending column name in the error, nor any other identifying information
     * we can use to extract the column name :(
     *
     * insert into [test1] ([small]) values (@p0)
     * - Arithmetic overflow error for data type tinyint, value = 50000.
     */
    const field = null;
    const parts = error.message.split(' ');
    const invalid = parts[parts.length - 1].slice(0, -1);
    return new ValueOutOfRangeException(field, {
        collection,
        field,
        invalid,
    });
}
function valueLimitViolation(error) {
    const betweenBrackets = /\[([^\]]+)\]/g;
    const betweenQuotes = /'([^']+)'/g;
    const bracketMatches = error.message.match(betweenBrackets);
    const quoteMatches = error.message.match(betweenQuotes);
    if (!bracketMatches || !quoteMatches)
        return error;
    const collection = bracketMatches[0].slice(1, -1);
    const field = quoteMatches[1].slice(1, -1);
    return new ValueTooLongException(field, {
        collection,
        field,
    });
}
function notNullViolation(error) {
    const betweenBrackets = /\[([^\]]+)\]/g;
    const betweenQuotes = /'([^']+)'/g;
    const bracketMatches = error.message.match(betweenBrackets);
    const quoteMatches = error.message.match(betweenQuotes);
    if (!bracketMatches || !quoteMatches)
        return error;
    const collection = bracketMatches[0].slice(1, -1);
    const field = quoteMatches[0].slice(1, -1);
    if (error.message.includes('Cannot insert the value NULL into column')) {
        return new ContainsNullValuesException(field, { collection, field });
    }
    return new NotNullViolationException(field, {
        collection,
        field,
    });
}
function foreignKeyViolation(error) {
    const betweenUnderscores = /__(.+)__/g;
    const betweenParens = /\(([^)]+)\)/g;
    // NOTE:
    // Seeing that MS SQL doesn't return the offending column name, we have to extract it from the
    // foreign key constraint name as generated by the database. This'll probably fail if you have
    // custom names for whatever reason.
    const underscoreMatches = error.message.match(betweenUnderscores);
    const parenMatches = error.message.match(betweenParens);
    if (!underscoreMatches || !parenMatches)
        return error;
    const underscoreParts = underscoreMatches[0].split('__');
    const collection = underscoreParts[1];
    const field = underscoreParts[2];
    return new InvalidForeignKeyException(field, {
        collection,
        field,
    });
}
