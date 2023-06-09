import { PrimaryKeyType } from './types';

export const DEFAULT_DB_TABLES: string[] = [
	'tests_flow_data',
	'tests_flow_completed',
	'superscribe_activity',
	'superscribe_collections',
	'superscribe_dashboards',
	'superscribe_fields',
	'superscribe_files',
	'superscribe_folders',
	'superscribe_migrations',
	'superscribe_notifications',
	'superscribe_panels',
	'superscribe_permissions',
	'superscribe_presets',
	'superscribe_relations',
	'superscribe_revisions',
	'superscribe_roles',
	'superscribe_sessions',
	'superscribe_settings',
	'superscribe_shares',
	'superscribe_users',
	'superscribe_webhooks',
];

// Role IDs
export const ROLE = {
	TESTS_FLOW: {
		ID: 'd70c0943-5b55-4c5d-a613-f539a27a57f5', // Created through migration
		NAME: 'Tests Flow Role',
	},
	ADMIN: {
		NAME: 'Admin Role',
	},
	APP_ACCESS: {
		NAME: 'App Access Role',
	},
	API_ONLY: {
		NAME: 'API Only Role',
	},
};

type UserData = {
	ID?: string;
	TOKEN: string;
	EMAIL: string;
	PASSWORD: string;
	NAME: string;
	KEY: string;
};

type UserType = {
	[key: string]: UserData;
};

export const USER: UserType = {
	TESTS_FLOW: {
		ID: '3d075128-c073-4f5d-891c-ed2eb2790a1c', // Created through migration
		TOKEN: 'TestsFlowToken',
		EMAIL: 'flow@tests.com',
		PASSWORD: 'TestsFlowPassword',
		NAME: 'Tests Flow User',
		KEY: 'TESTS_FLOW',
	},
	ADMIN: {
		TOKEN: 'AdminToken',
		EMAIL: 'admin@default.com',
		PASSWORD: 'AdminPassword',
		NAME: 'Admin User',
		KEY: 'ADMIN',
	},
	APP_ACCESS: {
		TOKEN: 'AppAccessToken',
		EMAIL: 'app-access@default.com',
		PASSWORD: 'AppAccessPassword',
		NAME: 'App Access User',
		KEY: 'APP_ACCESS',
	},
	API_ONLY: {
		TOKEN: 'APIOnlyToken',
		EMAIL: 'api-only@default.com',
		PASSWORD: 'APIOnlyPassword',
		NAME: 'API Only User',
		KEY: 'API_ONLY',
	},
	NO_ROLE: {
		TOKEN: 'NoRoleToken',
		EMAIL: 'no-role@default.com',
		PASSWORD: 'NoRolePassword',
		NAME: 'No-Role User',
		KEY: 'NO_ROLE',
	},
};

export const TEST_USERS = ['ADMIN', 'APP_ACCESS', 'API_ONLY', 'NO_ROLE']; // TESTS_FLOW is exluded

export const PRIMARY_KEY_TYPES: PrimaryKeyType[] = ['integer', 'uuid', 'string'];
