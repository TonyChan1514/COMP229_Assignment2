

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
        User.findById(id).exec()
        .then((user) => {
            done(null, user);
        })
        .catch((err) => {
            done(err);
        });
    });
};


// Create user record (Temp)
/*
const userRecord = new User({
  username: 'peggyau',
  password: 'password', // Make sure to hash this password in your actual application
  email: 'peggyau@gmail.com',
  // Other relevant information
});

// Hash the password before saving the user record
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(userRecord.password, salt, (err, hash) => {
    if (err) throw err;

    userRecord.password = hash;

    userRecord.save()
      .then((user) => {
        console.log('User record created:', user);
      })
      .catch((err) => {
        console.log('Error creating user record:', err);
      });
  });
});
*/