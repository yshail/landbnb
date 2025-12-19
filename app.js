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
const experiencesRouter = require("./routes/experiences.js");
const servicesRouter = require("./routes/services.js");
const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo').default || require('connect-mongo');
const User = require("./models/user.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const listingController = require("./controllers/listings.js");
const wrapAsync = require("./utils/wrapAsync.js");


// MongoDB Connection
const dbUrl = process.env.ATLASDB_URL;

async function main() {
  try {
    await mongoose.connect(dbUrl);
    console.log("MongoDB Connected Successfully!");
  } catch (err) {
    console.error("MongoDB Connection Error:", err.message);
    console.log("Make sure MongoDB is running");
    process.exit(1);
  }
}
main();

//middleware setup
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

// 1. Session Middleware MUST come first
const sessionSecret = process.env.SECRET || 'dev-fallback-secret-change-in-production';
if (!process.env.SECRET) {
  console.warn('⚠️  WARNING: SESSION_SECRET env variable is not set. Using fallback secret. Set SECRET in .env for production.');
}
const sessionOptions = {
  store: MongoStore.create({
    mongoUrl: dbUrl,
    touchAfter: 24 * 3600 // Lazy session update (24 hours)
  }),
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
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


app.get("/", wrapAsync(listingController.index));


//Listing-Route
app.use("/listings", listingRouter);

//Review Route
app.use("/listings", reviewRouter);

//Experiences Route
app.use("/experiences", experiencesRouter);

//Services Route
app.use("/services", servicesRouter);

app.use("/", userRouter);



app.listen(8080, (req, res) => {
  console.log("Server is listening")
});