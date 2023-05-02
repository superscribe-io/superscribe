import knex from 'knex';
import { createTracker, MockClient, Tracker } from 'knex-mock-client';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { InvalidPayloadException } from '../exceptions/index.js';
import { FilesService, ItemsService } from './index.js';
describe('Integration Tests', () => {
    let db;
    let tracker;
    beforeAll(() => {
        db = vi.mocked(knex.default({ client: MockClient }));
        tracker = createTracker(db);
    });
    afterEach(() => {
        tracker.reset();
        vi.clearAllMocks();
    });
    describe('Services / Files', () => {
        describe('createOne', () => {
            let service;
            let superCreateOne;
            beforeEach(() => {
                service = new FilesService({
                    knex: db,
                    schema: { collections: {}, relations: [] },
                });
                superCreateOne = vi.spyOn(ItemsService.prototype, 'createOne').mockReturnValue(Promise.resolve(1));
            });
            it('throws InvalidPayloadException when "type" is not provided', async () => {
                try {
                    await service.createOne({
                        title: 'Test File',
                        storage: 'local',
                        filename_download: 'test_file',
                    });
                }
                catch (err) {
                    expect(err).toBeInstanceOf(InvalidPayloadException);
                    expect(err.message).toBe('"type" is required');
                }
                expect(superCreateOne).not.toHaveBeenCalled();
            });
            it('creates a file entry when "type" is provided', async () => {
                await service.createOne({
                    title: 'Test File',
                    storage: 'local',
                    filename_download: 'test_file',
                    type: 'application/octet-stream',
                });
                expect(superCreateOne).toHaveBeenCalled();
            });
        });
    });
});
