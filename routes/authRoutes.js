const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    ); //route handler, if request comes in with this type and this route, do this second arg.

    app.get('/auth/google/callback', passport.authenticate('google')); //already knows the user from above, will attempt to get the info we want
};