import knex from 'knex';
import { createTracker, MockClient, Tracker } from 'knex-mock-client';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { getMessenger } from '../messenger.js';
import { WebhooksService } from './index.js';
vi.mock('../../src/database/index', () => {
    return { __esModule: true, default: vi.fn(), getDatabaseClient: vi.fn().mockReturnValue('postgres') };
});
vi.mock('../messenger', () => {
    return { getMessenger: vi.fn().mockReturnValue({ publish: vi.fn(), subscribe: vi.fn() }) };
});
describe('Integration Tests', () => {
    let db;
    let tracker;
    beforeAll(async () => {
        db = knex.default({ client: MockClient });
        tracker = createTracker(db);
    });
    beforeEach(() => {
        tracker.on.any('superscribe_webhooks').response({});
    });
    afterEach(() => {
        tracker.reset();
    });
    describe('Services / Webhooks', () => {
        let service;
        let messengerPublishSpy;
        beforeEach(() => {
            service = new WebhooksService({
                knex: db,
                schema: {
                    collections: {
                        superscribe_webhooks: {
                            collection: 'superscribe_webhooks',
                            primary: 'id',
                            singleton: false,
                            sortField: null,
                            note: null,
                            accountability: null,
                            fields: {
                                id: {
                                    field: 'id',
                                    defaultValue: null,
                                    nullable: false,
                                    generated: true,
                                    type: 'integer',
                                    dbType: 'integer',
                                    precision: null,
                                    scale: null,
                                    special: [],
                                    note: null,
                                    validation: null,
                                    alias: false,
                                },
                            },
                        },
                    },
                    relations: [],
                },
            });
            messengerPublishSpy = vi.spyOn(getMessenger(), 'publish');
        });
        afterEach(() => {
            messengerPublishSpy.mockClear();
        });
        describe('createOne', () => {
            it('should publish webhooks reload message once', async () => {
                await service.createOne({});
                expect(messengerPublishSpy).toBeCalledTimes(1);
            });
        });
        describe('createMany', () => {
            it('should publish webhooks reload message once', async () => {
                await service.createMany([{}]);
                expect(messengerPublishSpy).toBeCalledTimes(1);
            });
        });
        describe('updateOne', () => {
            it('should publish webhooks reload message once', async () => {
                await service.updateOne(1, {});
                expect(messengerPublishSpy).toBeCalledTimes(1);
            });
        });
        describe('updateMany', () => {
            it('should publish webhooks reload message once', async () => {
                await service.updateMany([1], {});
                expect(messengerPublishSpy).toBeCalledTimes(1);
            });
        });
        describe('deleteOne', () => {
            it('should publish webhooks reload message once', async () => {
                await service.deleteOne(1);
                expect(messengerPublishSpy).toBeCalledTimes(1);
            });
        });
        describe('deleteMany', () => {
            it('should publish webhooks reload message once', async () => {
                await service.deleteMany([1]);
                expect(messengerPublishSpy).toBeCalledTimes(1);
            });
        });
    });
});
