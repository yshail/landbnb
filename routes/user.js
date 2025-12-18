const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport');
const { saveRedirectUrl } = require('../middlware.js');
const { submitSignup, signupForm, loginForm, submitLogin, logout } = require('../controllers/users.js');

//User-Routes

//SignUp Route
router.get("/signup", signupForm);

router.post("/signup", submitSignup);

//LogIn Route

router.get("/login", loginForm);

router.post("/login", saveRedirectUrl, passport.authenticate("local", { failureFlash: true, failureRedirect: "/login" }), wrapAsync(submitLogin));


//Logout-Route
router.get("/logout", logout);




module.exports = router;