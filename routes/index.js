/*  Author: Chi Shing Chan
    Student ID # 301268811
    Date: 04 Jun, 2023
    File: routes/index.js
 */

const express = require('express');
const router = express.Router();
const controller = require("../controllers/index");

// Router callback
router.get("/", controller.home);
router.get("/projects", controller.projects);
router.get("/about", controller.about);
router.get("/services", controller.services);
router.get("/contact", controller.contact);


module.exports = router;