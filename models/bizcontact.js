/*  Author: Chi Shing Chan
    Student ID # 301268811
    Date: 16 Jun, 2023
    File: models/contacts.js
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    contactName: String,
    contactPhone: String,
    email: String,
});

const Contact = mongoose.model('Contact', userSchema);

module.exports = Contact;