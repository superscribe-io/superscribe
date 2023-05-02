import { ItemsService } from './items.js';
export class SettingsService extends ItemsService {
    constructor(options) {
        super('superscribe_settings', options);
    }
}
