import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
export default function getTemplatePath() {
    return resolve(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', 'templates');
}
