import { expect, test, describe } from 'vitest';
import { Url } from './url.js';
describe('path handling', () => {
    test('parse and serialize an URL without path', () => {
        expect(new Url('https://example.com').toString()).toStrictEqual('https://example.com');
    });
    test('parse and serialize an URL without path, removing trailing slash', () => {
        expect(new Url('https://example.com/').toString()).toStrictEqual('https://example.com');
    });
    test('parse and serialize an URL with path component', () => {
        expect(new Url('https://example.com/path').toString()).toStrictEqual('https://example.com/path');
    });
    test('parse and serialize an URL with path component, removing trailing slash', () => {
        expect(new Url('https://example.com/path/').toString()).toStrictEqual('https://example.com/path');
    });
});
describe('relative URL handling', () => {
    test('parse and serialize a relative path', () => {
        expect(new Url('/sample-path').toString()).toStrictEqual('/sample-path');
    });
    test('parse and serialize a relative path preserving path and hash components', () => {
        expect(new Url('/sample-path?sample_var=sample_value#sample_hash').toString()).toStrictEqual('/sample-path?sample_var=sample_value#sample_hash');
    });
});
describe('empty scheme handling', () => {
    test('parse and serialize an URl without scheme', () => {
        expect(new Url('//example.com/sample-path').toString()).toStrictEqual('//example.com/sample-path');
    });
    test('parse and serialize a relative path preserving path and hash components', () => {
        expect(new Url('//example.com:1234/sample-path?sample_var=sample_value#sample_hash').toString()).toStrictEqual('//example.com:1234/sample-path?sample_var=sample_value#sample_hash');
    });
});
describe('query parameter handling', () => {
    const SAMPLE_URL = 'https://example.com:1234/sample-path?sample_param=sample_value';
    test('parse and serialize an url to the original input', () => {
        expect(new Url(SAMPLE_URL).toString()).toStrictEqual(SAMPLE_URL);
    });
    test('parse a URL containing escaped query parameters', () => {
        expect(new Url('https://example.com:1234/sample-path?key+that+needs+encoding%21=sample%21').query).toStrictEqual({
            'key that needs encoding!': 'sample!',
        });
    });
    test('serialize an url without query', () => {
        expect(new Url('https://example.com:1234/sample-path').toString()).toStrictEqual('https://example.com:1234/sample-path');
    });
    test('merge existing query params', () => {
        expect(new Url(SAMPLE_URL).setQuery('new_query_pram', 'new_query_value').toString()).toStrictEqual('https://example.com:1234/sample-path?sample_param=sample_value&new_query_pram=new_query_value');
    });
    test('replace existing query params instead of adding with the same key', () => {
        expect(new Url(SAMPLE_URL).setQuery('sample_param', 'new_value').toString()).toStrictEqual('https://example.com:1234/sample-path?sample_param=new_value');
    });
    test('properly serialize query params and URL encode them when needed', () => {
        expect(new Url(SAMPLE_URL)
            .setQuery('ascii', ` ,;:!?'()/&+=$@`)
            .setQuery('encoding_optional', `*-.`)
            .setQuery('non_ascii', `çÁâÑ清ゆ`)
            .setQuery('key that needs encoding!', `sample`)
            .toString()).toStrictEqual('https://example.com:1234/sample-path' +
            '?sample_param=sample_value' +
            '&ascii=+%2C%3B%3A%21%3F%27%28%29%2F%26%2B%3D%24%40' +
            '&encoding_optional=*-.' +
            '&non_ascii=%C3%A7%C3%81%C3%A2%C3%91%E6%B8%85%E3%82%86' +
            '&key+that+needs+encoding%21=sample');
    });
});
describe('isAbsolute', () => {
    test('returns true for full URL', () => {
        expect(new Url('https://example.com/sample-path').isAbsolute()).toStrictEqual(true);
    });
    test('returns false when URL has no protocol', () => {
        expect(new Url('//example.com/sample-path').isAbsolute()).toStrictEqual(false);
    });
    test('returns false for relative URL', () => {
        expect(new Url('/sample-path').isAbsolute()).toStrictEqual(false);
    });
});
describe('isProtocolRelative', () => {
    test('returns true when URL has no protocol', () => {
        expect(new Url('//example.com/sample-path').isProtocolRelative()).toStrictEqual(true);
    });
    test('returns false for full URL', () => {
        expect(new Url('https://example.com/sample-path').isProtocolRelative()).toStrictEqual(false);
    });
    test('returns false when for relative URL', () => {
        expect(new Url('/sample-path').isProtocolRelative()).toStrictEqual(false);
    });
});
describe('isRootRelative', () => {
    test('returns true when for relative URL', () => {
        expect(new Url('/sample-path').isRootRelative()).toStrictEqual(true);
    });
    test('returns false for full URL', () => {
        expect(new Url('https://example.com/sample-path').isRootRelative()).toStrictEqual(false);
    });
    test('returns false when URL has host but no protocol', () => {
        expect(new Url('//example.com/sample-path').isRootRelative()).toStrictEqual(false);
    });
});
