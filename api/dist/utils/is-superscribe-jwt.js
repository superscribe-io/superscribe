import jwt from 'jsonwebtoken';
/**
 * Check if a given string conforms to the structure of a JWT
 * and whether it is issued by Superscribe.
 */
export default function isSuperscribeJWT(string) {
    try {
        const payload = jwt.decode(string, { json: true });
        if (payload?.iss !== 'superscribe')
            return false;
        return true;
    }
    catch {
        return false;
    }
}
