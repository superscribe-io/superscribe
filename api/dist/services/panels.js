import { ItemsService } from './items.js';
export class PanelsService extends ItemsService {
    constructor(options) {
        super('superscribe_panels', options);
    }
}
