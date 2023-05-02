import { ItemsService } from './items.js';
export class PresetsService extends ItemsService {
    constructor(options) {
        super('superscribe_presets', options);
    }
}
