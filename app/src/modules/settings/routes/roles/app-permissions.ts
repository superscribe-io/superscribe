import { Permission } from '@superscribe/types';

export const appRecommendedPermissions: Partial<Permission>[] = [
	{
		collection: 'superscribe_files',
		action: 'create',
		permissions: {},
		fields: ['*'],
	},
	{
		collection: 'superscribe_files',
		action: 'read',
		permissions: {},
		fields: ['*'],
	},
	{
		collection: 'superscribe_files',
		action: 'update',
		permissions: {},
		fields: ['*'],
	},
	{
		collection: 'superscribe_files',
		action: 'delete',
		permissions: {},
		fields: ['*'],
	},
	{
		collection: 'superscribe_dashboards',
		action: 'create',
		permissions: {},
		fields: ['*'],
	},
	{
		collection: 'superscribe_dashboards',
		action: 'read',
		permissions: {},
		fields: ['*'],
	},
	{
		collection: 'superscribe_dashboards',
		action: 'update',
		permissions: {},
		fields: ['*'],
	},
	{
		collection: 'superscribe_dashboards',
		action: 'delete',
		permissions: {},
		fields: ['*'],
	},
	{
		collection: 'superscribe_panels',
		action: 'create',
		permissions: {},
		fields: ['*'],
	},
	{
		collection: 'superscribe_panels',
		action: 'read',
		permissions: {},
		fields: ['*'],
	},
	{
		collection: 'superscribe_panels',
		action: 'update',
		permissions: {},
		fields: ['*'],
	},
	{
		collection: 'superscribe_panels',
		action: 'delete',
		permissions: {},
		fields: ['*'],
	},
	{
		collection: 'superscribe_folders',
		action: 'create',
		permissions: {},
		fields: ['*'],
	},
	{
		collection: 'superscribe_folders',
		action: 'read',
		permissions: {},
		fields: ['*'],
	},
	{
		collection: 'superscribe_folders',
		action: 'update',
		permissions: {},
		fields: ['*'],
	},
	{
		collection: 'superscribe_folders',
		action: 'delete',
		permissions: {},
	},
	{
		collection: 'superscribe_users',
		action: 'read',
		permissions: {},
		fields: ['*'],
	},
	{
		collection: 'superscribe_users',
		action: 'update',
		permissions: {
			id: {
				_eq: '$CURRENT_USER',
			},
		},
		fields: [
			'first_name',
			'last_name',
			'email',
			'password',
			'location',
			'title',
			'description',
			'avatar',
			'language',
			'theme',
			'tfa_secret',
		],
	},
	{
		collection: 'superscribe_roles',
		action: 'read',
		permissions: {},
		fields: ['*'],
	},
	{
		collection: 'superscribe_shares',
		action: 'read',
		permissions: {
			_or: [
				{
					role: {
						_eq: '$CURRENT_ROLE',
					},
				},
				{
					role: {
						_null: true,
					},
				},
			],
		},
		fields: ['*'],
	},
	{
		collection: 'superscribe_shares',
		action: 'create',
		permissions: {},
		fields: ['*'],
	},
	{
		collection: 'superscribe_shares',
		action: 'update',
		permissions: {
			user_created: {
				_eq: '$CURRENT_USER',
			},
		},
		fields: ['*'],
	},
	{
		collection: 'superscribe_shares',
		action: 'delete',
		permissions: {
			user_created: {
				_eq: '$CURRENT_USER',
			},
		},
		fields: ['*'],
	},
	{
		collection: 'superscribe_flows',
		action: 'read',
		permissions: {
			trigger: {
				_eq: 'manual',
			},
		},
		fields: ['id', 'name', 'icon', 'color', 'options', 'trigger'],
	},
];

export const appMinimalPermissions: Partial<Permission>[] = [
	{
		collection: 'superscribe_activity',
		action: 'read',
		permissions: {
			user: {
				_eq: '$CURRENT_USER',
			},
		},
	},
	{
		collection: 'superscribe_activity',
		action: 'create',
		validation: {
			comment: {
				_nnull: true,
			},
		},
	},
	{
		collection: 'superscribe_collections',
		action: 'read',
	},
	{
		collection: 'superscribe_fields',
		action: 'read',
	},
	{
		collection: 'superscribe_permissions',
		action: 'read',
		permissions: {
			role: {
				_eq: '$CURRENT_ROLE',
			},
		},
	},
	{
		collection: 'superscribe_presets',
		action: 'read',
		permissions: {
			_or: [
				{
					user: {
						_eq: '$CURRENT_USER',
					},
				},
				{
					_and: [
						{
							user: {
								_null: true,
							},
						},
						{
							role: {
								_eq: '$CURRENT_ROLE',
							},
						},
					],
				},
				{
					_and: [
						{
							user: {
								_null: true,
							},
						},
						{
							role: {
								_null: true,
							},
						},
					],
				},
			],
		},
	},
	{
		collection: 'superscribe_presets',
		action: 'create',
		validation: {
			user: {
				_eq: '$CURRENT_USER',
			},
		},
	},
	{
		collection: 'superscribe_presets',
		action: 'update',
		permissions: {
			user: {
				_eq: '$CURRENT_USER',
			},
		},
	},
	{
		collection: 'superscribe_presets',
		action: 'delete',
		permissions: {
			user: {
				_eq: '$CURRENT_USER',
			},
		},
	},
	{
		collection: 'superscribe_relations',
		action: 'read',
	},
	{
		collection: 'superscribe_roles',
		action: 'read',
		permissions: {
			id: {
				_eq: '$CURRENT_ROLE',
			},
		},
	},
	{
		collection: 'superscribe_settings',
		action: 'read',
	},
	{
		collection: 'superscribe_shares',
		action: 'read',
		permissions: {
			user_created: {
				_eq: '$CURRENT_USER',
			},
		},
	},
	{
		collection: 'superscribe_users',
		action: 'read',
		permissions: {
			id: {
				_eq: '$CURRENT_USER',
			},
		},
		fields: [
			'id',
			'first_name',
			'last_name',
			'last_page',
			'email',
			'password',
			'location',
			'title',
			'description',
			'tags',
			'preferences_divider',
			'avatar',
			'language',
			'theme',
			'tfa_secret',
			'status',
			'role',
		],
	},
];
