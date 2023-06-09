import mid from 'node-machine-id';
import env from '../env.js';
import logger from '../logger.js';
import { version } from './package.js';
export async function collectTelemetry() {
    const axios = (await import('axios')).default;
    if (env['TELEMETRY'] !== false) {
        try {
            await axios.post('https://telemetry.superscribe.io/', {
                version: version,
                public_url: env['PUBLIC_URL'],
                project_id: env['KEY'],
                machine_id: await mid.machineId(),
                db_client: env['DB_CLIENT'],
            });
        }
        catch (err) {
            if (env['NODE_ENV'] === 'development') {
                logger.error(err);
            }
        }
    }
}
