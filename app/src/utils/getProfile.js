import auth0 from 'auth0-js';

let webAuth = new auth0.WebAuth({
    domain: 'ghostwriter.auth0.com',
    clientID: 'UkVEWUCRG5Oh9lNaNkl3hORVL5CAV9pU',
    scope: 'openid profile'
});

var userProfile;

const getProfile = () => {
    if (!userProfile) {
        let accessToken = localStorage.getItem('access_token');
    
        if (!accessToken) {
          console.log('Access Token must exist to fetch profile');
        }
    
        webAuth.client.userInfo(accessToken, function(err, profile) {
          if (profile) {
            userProfile = profile;
          }
        });
    } else {
        console.error('Could not get user profile');
    }
    return userProfile;
}

export default getProfile;