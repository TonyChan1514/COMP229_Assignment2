/*  Author: Chi Shing Chan
    Student ID # 301268811
    Date: 04 Jun, 2023
    File: routes/index.js
 */

const express = require('express');
const router = express.Router();
const controller = require("../controllers/index");
const bizcontactController = require("../controllers/bizcontact");
const passport = require('passport');

const { forwardAuthenticated, ensureAuthenticated } = require('../config/auth');

// Router callback
router.get("/", controller.home);
router.get("/projects", controller.projects);
router.get("/about", controller.about);
router.get("/services", controller.services);
router.get("/contact", controller.contact);

// For login router
router.get('/login', forwardAuthenticated, controller.login);
router.post('/login', forwardAuthenticated, passport.authenticate('local', {
    successRedirect: '/bizcontact',
    failureRedirect: '/login',
}));

router.get("/logout", ensureAuthenticated, controller.logout);


// For Business Contact router
router.get('/bizcontact', ensureAuthenticated, bizcontactController.getContacts);
router.get('/bizcontact/add', ensureAuthenticated, bizcontactController.addBizContact);
router.post('/bizcontact/add', ensureAuthenticated, bizcontactController.addBizContactRecord);
router.get('/bizcontact/update/:id', ensureAuthenticated, bizcontactController.updateBizContact);
router.post('/bizcontact/update/:id', ensureAuthenticated, bizcontactController.updateBizContactRecord);
//router.delete('/bizcontact/delete/:id', ensureAuthenticated, bizcontactController.deleteBizcontact);
router.get('/bizcontact/delete/:id', ensureAuthenticated, bizcontactController.deleteBizcontact);
router.post('/bizcontact/delete/:id', ensureAuthenticated, bizcontactController.deleteBizcontact);

module.exports = router;