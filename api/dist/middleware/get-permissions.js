import asyncHandler from '../utils/async-handler.js';
import { getPermissions as getPermissionsUtil } from '../utils/get-permissions.js';
const getPermissions = asyncHandler(async (req, _res, next) => {
    if (!req.accountability) {
        throw new Error('getPermissions middleware needs to be called after authenticate');
    }
    req.accountability.permissions = await getPermissionsUtil(req.accountability, req.schema);
    return next();
});
export default getPermissions;
