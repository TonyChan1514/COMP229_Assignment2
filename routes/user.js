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

const { forwardAuthenticated } = require('../config/auth');
const controller = require("../controllers/index");
//const authController = require('../controllers/auth');

//router.get('/login', controller.login);
router.get('/login', forwardAuthenticated, controller.login);

module.exports = router;