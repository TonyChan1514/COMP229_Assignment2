/*  Author: Chi Shing Chan
    Student ID # 301268811
    Date: 16 Jun, 2023
    File: config/auth.js
 */

module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        // Redirect to login page if not authenticated
        res.redirect('/login');
    },

    forwardAuthenticated: (req, res, next) => {
        if (!req.isAuthenticated()) {
          return next();
        }
        // Redirect to business contact page if already authenticated
        res.redirect('/bizcontact');
    },
};