import {useRouter} from "next/router";
import {withAuthInfo, useRedirectFunctions} from "@propelauth/react";
import {useEffect, useState} from "react";

function fetchOrgInfo(orgId, accessToken) {
    return fetch(`/api/org/${orgId}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    }).then(response => {
        if (response.ok) {
            return response.json()
        } else {
            return {status: response.status}
        }
    })
}

const Org = ({orgHelper, accessToken}) => {
    const {redirectToOrgPage} = useRedirectFunctions()

    const router = useRouter();
    const {orgId} = router.query;
    const org = orgHelper.getOrg(orgId)

    const [response, setResponse] = useState(null)
    useEffect(() => {
        fetchOrgInfo(org.orgId, accessToken).then(setResponse)
    }, [org.orgId, accessToken])

    if (!org) {
        return <div>Not Found</div>
    }

    return <div>
        <h3>Org: {org.orgName}</h3>
        <h4>Your role: {org.userAssignedRole}</h4>
        <p>{response ? "" : "Loading..."}</p>
        <h4>List of Organization members</h4>
        <ul>
            {response ? response.orgUsers.users.map(user => {
                return <li key={user.userId}>
                    <p>{user.email}</p>
                </li>
            }) : 'Loading...'}
        </ul>
        <br></br>
        <button onClick={() => redirectToOrgPage(orgId)}>
            Send Invite to New Member to Organization
        </button>
    </div>

}

export default withAuthInfo(Org);