import fse from 'fs-extra';
import path from 'path';
import { pluralize } from './pluralize.js';
export async function ensureExtensionDirs(extensionsPath, types) {
    for (const extensionType of types) {
        const dirPath = path.resolve(extensionsPath, pluralize(extensionType));
        try {
            await fse.ensureDir(dirPath);
        }
        catch {
            throw new Error(`Extension folder "${dirPath}" couldn't be opened`);
        }
    }
}
