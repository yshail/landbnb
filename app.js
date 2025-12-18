require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const session = require('express-session');
const flash = require('connect-flash');
const User = require("./models/user.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");

//connecting mongodb
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Wanderlust");
  console.log("MongoDb Connected");
};
main().catch(err => console.log(err));

//middleware setup
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

// 1. Session Middleware MUST come first
const sessionOptions = {
  secret: 'thisshouldbeabettersecret!',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days (optional)
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
};
app.use(session(sessionOptions));

// 2. Flash Middleware comes AFTER session
app.use(flash());

// 3. Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// 3. Locals Middleware (Optional but Recommended)
// This lets you use <%= success %> in your EJS files automatically
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

//Home-Route
app.get("/", (req, res) => {
  res.send("Hi i am listening..")
});


//Listing-Route
app.use("/listings", listingRouter);

//Review Route
app.use("/listings", reviewRouter);

app.use("/", userRouter);

app.listen(8080, (req, res) => {
  console.log("Server is listening")
});