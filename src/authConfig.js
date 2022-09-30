export const b2cPolicies = {
  names: {
      signUpSignIn: "signup_signin",
      forgotPassword: "b2c_1_reset",
      editProfile: "b2c_1_edit_profile"
  },
  authorities: {
      signUpSignIn: {
          authority: "https://inkarted.b2clogin.com/inkarted.onmicrosoft.com/b2c_1_signup_signin",
      },
      forgotPassword: {
          authority: "https://inkarted.b2clogin.com/inkarted.onmicrosoft.com/b2c_1_reset",
      },
      editProfile: {
          authority: "https://inkarted.b2clogin.com/inkarted.onmicrosoft.com/b2c_1_edit_profile"
      }
  },
  authorityDomain: "https://inkarted.b2clogin.com"
}

export const msalConfig = {
  auth: {
    clientId: "9b9486f4-16ba-4ca8-a5c4-c63ac030e978",
    authority: "https://login.microsoftonline.com/inkarted.onmicrosoft.com", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "http://192.168.70.116:3000/",
    knownAuthorities : [b2cPolicies.authorityDomain],
    postLogoutRedirectUri: "/", // Indicates the page to navigate after logout.
    navigateToLoginRequestUrl: false, // If "true", wil
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
 scopes: ["User.Read"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};