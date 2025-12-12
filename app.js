const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");
const session = require('express-session');
const flash = require('connect-flash');

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

// 3. Locals Middleware (Optional but Recommended)
// This lets you use <%= success %> in your EJS files automatically
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

//Home-Route
app.get("/", (req, res) => {
  res.send("Hi i am listening..")
});

//Review-Route
app.use("/listings/:id/reviews", reviews);

//Listing-Route
app.use("/listings", listings);

app.listen(8080, (req, res) => {
  console.log("Server is listening")
});