
module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        // Redirect to login page if not authenticated
        res.redirect('/user/login');
    },

    forwardAuthenticated: (req, res, next) => {
        if (!req.isAuthenticated()) {
          return next();
        }
        // Redirect to business contact page if already authenticated
        res.redirect('/bizcontact');
    },
};