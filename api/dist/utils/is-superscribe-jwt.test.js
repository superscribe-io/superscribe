import isSuperscribeJWT from './is-superscribe-jwt.js';
import jwt from 'jsonwebtoken';
import { test, expect } from 'vitest';
test('Returns false for non JWT string', () => {
    const result = isSuperscribeJWT('test');
    expect(result).toBe(false);
});
test('Returns false for JWTs with text payload', () => {
    const token = jwt.sign('plaintext', 'secret');
    const result = isSuperscribeJWT(token);
    expect(result).toBe(false);
});
test(`Returns false if token issuer isn't "superscribe"`, () => {
    const token = jwt.sign({ payload: 'content' }, 'secret', { issuer: 'rijk' });
    const result = isSuperscribeJWT(token);
    expect(result).toBe(false);
});
test(`Returns true if token is valid JWT and issuer is "superscribe"`, () => {
    const token = jwt.sign({ payload: 'content' }, 'secret', { issuer: 'superscribe' });
    const result = isSuperscribeJWT(token);
    expect(result).toBe(true);
});
