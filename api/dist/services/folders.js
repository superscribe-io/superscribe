import { ItemsService } from './items.js';
export class FoldersService extends ItemsService {
    constructor(options) {
        super('superscribe_folders', options);
    }
}
