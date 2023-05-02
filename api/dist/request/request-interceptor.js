import axios from 'axios';
import { lookup } from 'node:dns/promises';
import { isIP } from 'node:net';
import { URL } from 'node:url';
import logger from '../logger.js';
import { validateIP } from './validate-ip.js';
export const requestInterceptor = async (config) => {
    const uri = axios.getUri(config);
    const { hostname } = new URL(uri);
    let ip;
    if (isIP(hostname) === 0) {
        try {
            const dns = await lookup(hostname);
            ip = dns.address;
        }
        catch (err) {
            logger.warn(err, `Couldn't lookup the DNS for url "${uri}"`);
            throw new Error(`Requested URL "${uri}" resolves to a denied IP address`);
        }
    }
    else {
        ip = hostname;
    }
    await validateIP(ip, uri);
    return config;
};
