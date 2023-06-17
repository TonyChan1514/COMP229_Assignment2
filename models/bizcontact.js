
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    contactName: String,
    contactPhone: String,
    email: String,
});

const Contact = mongoose.model('Contact', userSchema);

module.exports = Contact;