import getDatabase from '../../../database/index.js';
import logger from '../../../logger.js';
import { getSnapshot } from '../../../utils/get-snapshot.js';
import { constants as fsConstants, promises as fs } from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import { dump as toYaml } from 'js-yaml';
export async function snapshot(snapshotPath, options) {
    const database = getDatabase();
    try {
        const snapshot = await getSnapshot({ database });
        let snapshotString;
        if (options?.format === 'yaml') {
            snapshotString = toYaml(snapshot);
        }
        else {
            snapshotString = JSON.stringify(snapshot);
        }
        if (snapshotPath) {
            const filename = path.resolve(process.cwd(), snapshotPath);
            let snapshotExists;
            try {
                await fs.access(filename, fsConstants.F_OK);
                snapshotExists = true;
            }
            catch {
                snapshotExists = false;
            }
            if (snapshotExists && options?.yes === false) {
                const { overwrite } = await inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'overwrite',
                        message: 'Snapshot already exists. Do you want to overwrite the file?',
                    },
                ]);
                if (overwrite === false) {
                    database.destroy();
                    process.exit(0);
                }
            }
            await fs.writeFile(filename, snapshotString);
            logger.info(`Snapshot saved to ${filename}`);
        }
        else {
            process.stdout.write(snapshotString);
        }
        database.destroy();
        process.exit(0);
    }
    catch (err) {
        logger.error(err);
        database.destroy();
        process.exit(1);
    }
}
