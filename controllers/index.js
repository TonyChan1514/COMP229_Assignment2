/*  Author: Chi Shing Chan
    Student ID # 301268811
    Date: 04 Jun, 2023
    File: controllers/index.js
 */

// Call Home page
exports.home = function (req, res){
    res.render("home", { title: "Home" })
};

// Call Projects page
exports.projects = function (req, res){
    res.render("projects", { title: "Projects" })
};

// Call About page
exports.about = function (req, res){
    res.render("about", { title: "About" })
};

// Call Services page
exports.services = function (req, res){
    res.render("services", { title: "Services" })
};

// Call Contact page
exports.contact = function (req, res){
    res.render("contact", { title: "Contact" })
};
