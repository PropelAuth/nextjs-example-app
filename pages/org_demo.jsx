import {withRequiredAuthInfo, useRedirectFunctions} from '@propelauth/react';
import Link from 'next/link'

// orgHelper is automatically injected from withRequiredAuthInfo
function OrgSelector({orgHelper}) {
    const {redirectToCreateOrgPage} = useRedirectFunctions()

    return <div>
        {orgHelper.getOrgs().map(org => {
            return <span key={org.orgId}>
                <Link href={`/org/${org.orgId}`}>
                    <button>See members of <b>{org.orgName}</b></button>
                </Link><br/>
            </span>
        })}
        <button onClick={redirectToCreateOrgPage}>Create/Join Organization</button>
    </div>
}

export default withRequiredAuthInfo(OrgSelector);