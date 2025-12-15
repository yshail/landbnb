const express = require('express');
const router = express.Router();
const User = require("../models/user.js");

//User-Routes
router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

router.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ username ,email });
    const registeredUser = await User.register(user, password);
    res.redirect("/listings");
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/users/signup");
  }
});




module.exports = router;