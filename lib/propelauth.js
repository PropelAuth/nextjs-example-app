import {handleError, initBaseAuth} from "@propelauth/node";

export const propelauth = initBaseAuth({
    authUrl: process.env.NEXT_PUBLIC_AUTH_URL,
    apiKey: process.env.PROPELAUTH_API_KEY,
    manualTokenVerificationMetadata: {
        verifierKey: process.env.PROPELAUTH_VERIFIER_KEY,
        issuer: process.env.NEXT_PUBLIC_AUTH_URL,
    }
});

/*******************************************************************
 * Below are helper functions that are specific to our API routes. *
 *******************************************************************/

/**
 * This function checks that the authorization header is formatted like this:
 * Bearer {ACCESS_TOKEN}
 * It will then verify the access token is valid,determine which user it's for,
 *   and return that user.
 *
 * If the token is invalid or missing, a 401 response is returned to the user.
 */
export async function validateUser(req, res) {
    try {
        return await propelauth.validateAccessTokenAndGetUser(req.headers.authorization)
    } catch (e) {
        let err = handleError(e, {logError: true, returnDetailedErrorToUser: false})
        res.status(err.status).send(err.message)
    }
}

/**
 * This function checks that the authorization header is formatted like this:
 * Bearer {ACCESS_TOKEN}
 * It will then verify the access token is valid and determine which user it's for.
 * Finally, it checks that the user is in an organization based on it's ID which is
 *   passed in as a path parameter.
 *
 * If the token is invalid or missing, a 401 response is returned to the user.
 * If the user isn't in the specified organization, a 403 response is returned to the user.
 */
export async function validateUserIsInOrgByPathParam(req, res) {
    try {
        return await propelauth.validateAccessTokenAndGetUserWithOrgInfo(
            req.headers.authorization,
            {orgId: req.query.orgId}
        )
    } catch (e) {
        let err = handleError(e, {logError: true, returnDetailedErrorToUser: false})
        res.status(err.status).send(err.message)
    }
}