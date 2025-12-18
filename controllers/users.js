const User = require("../models/user.js");


module.exports.submitSignup = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({username, email });
    const registeredUser = await User.register(user, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
  if (err) {
    return next(err);
  }
  req.flash("success", "Welcome to LANDBNB!");
  res.redirect("/listings");
});
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
}

module.exports.signupForm  = (req, res) => {
  res.render("users/signup.ejs");
}

module.exports.loginForm = (req, res) => {
  res.render("users/login.ejs");
}

module.exports.submitLogin = async (req, res) => {

  req.flash("success", "Welcome Back!");
  const redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
}

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are logged out!");
    res.redirect("/listings");
  });
}