import {withRequiredAuthInfo} from '@propelauth/react';

// user is automatically injected from withRequiredAuthInfo
// withRequiredAuthInfo will only render this component if the user is logged in
function DisplayUserInformationOnFrontend({user}) {
    return <span>
        <h2>User Info</h2>
        {user.pictureUrl && <img src={user.pictureUrl} />}
        <pre>user: {JSON.stringify(user, null, 2)}</pre>
    </span>
}

export default withRequiredAuthInfo(DisplayUserInformationOnFrontend);