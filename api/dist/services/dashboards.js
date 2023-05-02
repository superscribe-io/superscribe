import { ItemsService } from './items.js';
export class DashboardsService extends ItemsService {
    constructor(options) {
        super('superscribe_dashboards', options);
    }
}
