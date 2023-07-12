import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
import * as dotenv from 'dotenv';
import path from 'path';
let env_path = path.resolve(__dirname,'.env'); 
dotenv.config({
    path: env_path
});

console.log(process.env.HOSTNAME);