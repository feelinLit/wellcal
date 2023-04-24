async function googleSignInClicked() {
  try {
    const authUrl =
      await supertokensThirdParty.getAuthorisationURLWithQueryParamsAndSetState(
        {
          providerId: 'google',

          // This is where Google should redirect the user back after login or error.
          // This URL goes on the Google's dashboard as well.
          authorisationURL: 'http://localhost:3000/user/callback/google',
        },
      );

    console.log(authUrl);
    /*
    Example value of authUrl: https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=offline&include_granted_scopes=true&response_type=code&client_id=1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com&state=5a489996a28cafc83ddff&redirect_uri=https%3A%2F%2Fsupertokens.io%2Fdev%2Foauth%2Fredirect-to-app&flowName=GeneralOAuthFlow
    */

    // we redirect the user to google for auth.
    window.location.assign(authUrl);
  } catch (err) {
    if (err.isSuperTokensGeneralError === true) {
      // this may be a custom error message sent from the API by you.
      window.alert(err.message);
    } else {
      window.alert(
        'Oops! Something went wrong.\n' + err.message
          ? err.message
          : 'message is undefined',
      );
    }
  }
}

async function logout() {
  await supertokensSession.signOut();
  window.location.href = '/';
}

async function doesSessionExist() {
  var loggedInElement = document.getElementById('auth');
  var authElement = document.createElement('i');

  if (await supertokensSession.doesSessionExist()) {
    authElement.className = className = 'fas fa-sign-out-alt';
    authElement.id = 'signOut';
    authElement.addEventListener('click', logout);
  } else {
    authElement.className = className = 'fas fa-sign-in-alt';
    authElement.id = 'signIn';
    authElement.addEventListener('click', googleSignInClicked);
  }

  loggedInElement.appendChild(authElement);
}

if (window.location.pathname === '/signIn') {
  googleSignInClicked();
}

doesSessionExist();
