import { validateEnv } from '../utils/validate-env.js';
import { registerDrivers } from './register-drivers.js';
import { registerLocations } from './register-locations.js';
import type { StorageManager } from '@superscribe/storage';

export const _cache: { storage: any | null } = {
	storage: null,
};

export const getStorage = async (): Promise<StorageManager> => {
	if (_cache.storage) return _cache.storage;

	const { StorageManager } = await import('@superscribe/storage');

	validateEnv(['STORAGE_LOCATIONS']);

	_cache.storage = new StorageManager();

	await registerDrivers(_cache.storage);
	await registerLocations(_cache.storage);

	return _cache.storage;
};
