import {propelauth, validateUserIsInOrgByPathParam} from "../../../lib/propelauth"

export default async function handler(req, res) {
    const {user, orgMemberInfo} = await validateUserIsInOrgByPathParam(req, res)
    const orgUsers = await propelauth.fetchUsersInOrg({orgId: orgMemberInfo.orgId})
    res.status(200).json({user, orgMemberInfo, orgUsers: orgUsers})
}