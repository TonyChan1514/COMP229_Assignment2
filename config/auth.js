
module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if (req.ensureAuthenticated()){
            return next();
        }
   
        req.flash("Please login first");
        req.redirect("/");
    },

    forwardAuthenticated: (req, res, next) => {
        if (!req.isAuthenticated()) {
            return next();
        }
    },
};