import { BaseException } from '@superscribe/exceptions';
export class InvalidForeignKeyException extends BaseException {
    constructor(field, extensions) {
        if (field) {
            super(`Invalid foreign key in field "${field}".`, 400, 'INVALID_FOREIGN_KEY', extensions);
        }
        else {
            super(`Invalid foreign key.`, 400, 'INVALID_FOREIGN_KEY', extensions);
        }
    }
}
