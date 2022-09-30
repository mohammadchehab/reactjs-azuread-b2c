import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { b2cPolicies } from "../authConfig";
import { useState } from "react";

function UserProfileTile() {
  const { instance, accounts } = useMsal();
  const [name, setName] = useState("");

  instance.addEventCallback((message) => {
    switch (message.eventType) {
      case "msal:loginSuccess":
        console.log(message);
        let account = message.payload.idTokenClaims;
        setName(account.given_name);
        break;
    }
  });

  const handleLogin = () => {
    instance
      .loginRedirect(b2cPolicies.authorities.signUpSignIn)
      .catch((error) => console.log(error));
  };

  const editProfile = () => {
    let request = {
      ...b2cPolicies.authorities.editProfile,
      loginHint: instance.getAccountByLocalId(accounts[0].localAccountId)
        .username,
    };

    instance.loginHint = request.loginHint;
    instance.loginRedirect(request).catch((e) => {
      alert(e);
    });
  };

  return (
    
    <div className="userProfileTile">
      <AuthenticatedTemplate>
        Welcome {name}
        <ul>
          <li>
            <a onClick={() => editProfile()}>Edit your profile</a>
          </li>
          <li>
            <a onClick={() => instance.logout()}>Logout</a>
          </li>
        </ul>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>Hello there, how about you login ?</p>
        <div>
          <button className="button" onClick={() => handleLogin()}>
            Login
          </button>
        </div>
      </UnauthenticatedTemplate>
    </div>
  );
}

export default UserProfileTile;
