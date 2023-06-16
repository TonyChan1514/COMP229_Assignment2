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

// Config passport
require('./config/passport')(passport);

// Connect to MongoDB
const mongodb = process.env.MONGODB_URI;
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

// Body Parser
app.use(express.urlencoded({ extended: false }));

// Configure seession
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
    })
);

app.use(express.json());
app.use(flash());

// Passport session
app.use(passport.initialize());
app.use(passport.session());

// Set the static path
app.use(express.static('public'));

// Router
app.use('/', router);
app.use('/user', require('./routes/user'));
//app.use('/dashboard', require('./routes/contact'));

// Start the server
app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port 3000');
});

module.exports = app;
