export const b2cPolicies = {
  names: {
      signUpSignIn: "signup_signin",
      forgotPassword: "b2c_1_reset",
      editProfile: "b2c_1_edit_profile"
  },
  authorities: {
      signUpSignIn: {
          authority: "https://droopel.b2clogin.com/droopel.onmicrosoft.com/B2C_1_signup",
      },
      forgotPassword: {
          authority: "https://inkarted.b2clogin.com/inkarted.onmicrosoft.com/b2c_1_reset",
      },
      editProfile: {
          authority: "https://inkarted.b2clogin.com/inkarted.onmicrosoft.com/b2c_1_edit_profile"
      }
  },
  authorityDomain: "https://droopel.b2clogin.com"
}

export const msalConfig = {
  auth: {
    clientId: "cc9efdfa-a392-4f1f-883d-83f6f13acb08",
    authority: "https://droopel.microsoftonline.com/Droopel.onmicrosoft.com", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "http://localhost:3000/",
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
