/*  Author: Chi Shing Chan
    Student ID # 301268811
    Date: 16 Jun, 2023
    File: models/user.js
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;