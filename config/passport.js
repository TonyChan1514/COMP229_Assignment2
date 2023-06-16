

const User = require('../models/user');
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcryptjs');

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
        User.findOne({ username: username })
        .then((user) => {
            if (!user) {
                return done(null, false, { message: 'Invalid username or password' });
            }

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;

                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Invalid username or password' });
                }
            });
        })
        .catch((err) => {
          console.log(err);
          return done(err);
        });
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
};

/*module.exports = function (passport) {
    passport.use(
        new LocalStrategy((username, password, done) => {
            User.findOne({ username: username }, (err, user) => {
                if (err) return done(err);
                if (!user) return done(null, false);
                if (user.password !== password) return done(null, false);
                return done(null, user);
            });
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
};*/