import { describe, expect, vi, test } from 'vitest';
import { getAuthProviders } from '../../src/utils/get-auth-providers.js';

let factoryEnv: { [k: string]: any } = {};

vi.mock('../../src/env', () => ({
	default: new Proxy(
		{},
		{
			get(_target, prop) {
				return factoryEnv[prop as string];
			},
		}
	),
}));

const scenarios = [
	{
		name: 'when no providers configured',
		input: {},
		output: [],
	},
	{
		name: 'when no driver configured',
		input: {
			AUTH_PROVIDERS: 'superscribe',
		},
		output: [],
	},

	{
		name: 'when single provider and driver are properly configured',
		input: {
			AUTH_PROVIDERS: 'superscribe',
			AUTH_DIRECTUS_DRIVER: 'openid',
			AUTH_DIRECTUS_LABEL: 'Superscribe',
			AUTH_DIRECTUS_ICON: 'hare',
		},
		output: [
			{
				name: 'superscribe',
				driver: 'openid',
				label: 'Superscribe',
				icon: 'hare',
			},
		],
	},

	{
		name: 'when multiple provider and driver are properly configured',
		input: {
			AUTH_PROVIDERS: 'superscribe,custom',
			AUTH_DIRECTUS_DRIVER: 'openid',
			AUTH_DIRECTUS_LABEL: 'Superscribe',
			AUTH_DIRECTUS_ICON: 'hare',
			AUTH_CUSTOM_DRIVER: 'openid',
			AUTH_CUSTOM_ICON: 'lock',
		},
		output: [
			{
				name: 'superscribe',
				driver: 'openid',
				label: 'Superscribe',
				icon: 'hare',
			},
			{
				name: 'custom',
				driver: 'openid',
				icon: 'lock',
			},
		],
	},
];

describe('get auth providers', () => {
	for (const scenario of scenarios) {
		test(scenario.name, () => {
			factoryEnv = scenario.input;
			expect(getAuthProviders()).toEqual(scenario.output);
		});
	}
});
