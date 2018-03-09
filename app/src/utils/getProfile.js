import auth0 from 'auth0-js';

let _userProfile;

class Profile {
    construtor() {
    }

    getProfile = () => {
        if (!_userProfile) {
            let webAuth = new auth0.WebAuth({
                domain: 'ghostwriter.auth0.com',
                clientID: 'UkVEWUCRG5Oh9lNaNkl3hORVL5CAV9pU',
                audience: 'https://ghostwriter.auth0.com/userinfo',
                responseType: 'token id_token',
                scope: 'openid profile'
            });
        
            let accessToken = localStorage.getItem('access_token');
        
            if (!accessToken) {
                console.log('Access Token must exist to fetch profile');
            }
        
            webAuth.client.userInfo(accessToken, function(err, profile) {
                console.log(profile);
                if (profile) {
                    _userProfile = profile;
                }
            });
        }
        return _userProfile;
    }
}

export default Profile;