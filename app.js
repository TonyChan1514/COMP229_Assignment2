/*  Author: Chi Shing Chan
    Student ID # 301268811
    Date: 04 Jun, 2023
    File: app.js
 */

const express = require('express');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const router = require('./routes/index');
const passport = require('passport');
const flash = require('express-flash')
const app = express();

// Set environment config path
dotenv.config({ path:'config.env'});
const mongodb = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to Mongo DB ...");
}).catch((err) => console.log(err)
);


// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set the static path
app.use(express.static('public'));

// Router
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);
app.use('/', require('./routes/user'));
//app.use('/dashboard', require('./routes/contact'));

// Passport session
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// Configure seession
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
    })
);

// Start the server
app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port 3000');
});

module.exports = app;
