/*  Author: Chi Shing Chan
    Student ID # 301268811
    Date: 04 Jun, 2023
    File: app.js
 */

const express = require('express');
const path = require('path');
const router = require('./routes/index');
const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set the static path
app.use(express.static('public'));

// Router
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

// Start the server
app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port 3000');
});

module.exports = app;
