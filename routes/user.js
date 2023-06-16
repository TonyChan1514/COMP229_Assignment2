/*  Author: Chi Shing Chan
    Student ID # 301268811
    Date: 14 Jun, 2023
    File: routes/index.js
 */

const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require("../controllers/index");

const { forwardAuthenticated, ensureAuthenticated } = require('../config/auth');

router.get('/login', forwardAuthenticated, controller.login);

router.post('/login', forwardAuthenticated, passport.authenticate('local', {
    successRedirect: '/bizcontact',
    failureRedirect: '/',
}));

module.exports = router;