const passport = require('passport'); //import passport js
const GoogleStrategy = require('passport-google-oauth20').Strategy; //import passport strategy for google oauth 2.0
const keys = require('../config/keys');

//passport.use: a generic register to have passport make use of the given strategy. must give a client ID and client secret.
passport.use(
    new GoogleStrategy( //google strategy has an internal identifier of the string google
        {   //first pass object with these three parameters, the callbackURL being the URL the user is sent to after giving access to our site.
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => { //arrow function with argument accessToken (will revisit later)
            console.log('access token', accessToken); //access token allows us to do things on behalf of the user, and gives proof to google.
            console.log('refresh token', refreshToken); //refresh token allows to refresh the access token, which expires.
            console.log('profile', profile);
        }
    )
);