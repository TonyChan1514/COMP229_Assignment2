/*  Author: Chi Shing Chan
    Student ID # 301268811
    Date: 14 Jun, 2023
    File: routes/index.js
 */

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const user = require('../models/user');
const controller = require("../controllers/index");

const { forwardAuthenticated } = require('../config/auth');

router.get('/login', forwardAuthenticated, controller.login);

router.post('/login', forwardAuthenticated, passport.authenticate('local', {
    successRedirect: '/bizcontact',
    failureRedirect: '/',
  }));

module.exports = router;