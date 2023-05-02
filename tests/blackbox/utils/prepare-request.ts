import { getUrl } from '@common/config';
import request from 'supertest';

export type AllowedRequestMethods = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'search';

export type RequestOptions = {
	path: string;
	method: AllowedRequestMethods;
	token: string;
	body?: any;
};

export const PrepareRequest = (vendor: string, requestOptions: RequestOptions) => {
	const req = request(getUrl(vendor))[requestOptions.method](requestOptions.path);

	if (requestOptions.token) {
		req.set('Authorization', `Bearer ${requestOptions.token}`);
	}

	if (requestOptions.body) {
		req.send(requestOptions.body);
	}

	return req;
};
