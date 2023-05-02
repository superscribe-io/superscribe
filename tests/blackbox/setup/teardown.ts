/* eslint-disable no-console */

import { Listr } from 'listr2';
import vendors from '../common/get-dbs-to-test';
import config from '../common/config';
import { JestConfigWithTsJest } from 'ts-jest/dist/types';
import global from './global';

if (require.main === module) {
	teardown(undefined, true);
}

export default async function teardown(jestConfig?: JestConfigWithTsJest, _isAfterWatch = false): Promise<void> {
	if (jestConfig?.watch || jestConfig?.watchAll) return;

	if (!process.env.TEST_LOCAL) {
		await new Listr([
			{
				title: 'Stop Superscribe servers',
				task: () => {
					return new Listr(
						vendors.map((vendor) => {
							return {
								title: config.names[vendor]!,
								task: async () => {
									const superscribe = global.superscribe[vendor];
									superscribe!.kill();

									const superscribeNoCache = global.superscribeNoCache[vendor];
									superscribeNoCache!.kill();
								},
							};
						}),
						{ concurrent: true, exitOnError: false }
					);
				},
			},
		]).run();
	}

	console.log('\n');

	console.log(`👮‍♀️ Tests complete!\n`);
}
