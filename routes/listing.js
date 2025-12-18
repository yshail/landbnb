const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middlware.js");
const listingController = require("../controllers/listings.js");

const multer  = require('multer')
const { storage } = require('../cloudConfig.js');
const upload = multer({ storage })


//Listing-Routes-------------------
//Index-Route
router.get("/", wrapAsync(listingController.index));

//new-route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//Show-Route
router.get("/:id", wrapAsync(listingController.showListing));

//Create Route
router.post("/", isLoggedIn,upload.single('listing[image]') , wrapAsync(listingController.createListing));

//Edit-Route
router.get("/:id/edit",isLoggedIn, wrapAsync(listingController.editListing));

//Update-Route
router.put("/:id",isLoggedIn,upload.single('listing[image]'), wrapAsync(listingController.updateListing));

//delete-Route
router.delete("/:id",isLoggedIn, wrapAsync(listingController.deleteListing));





//Export
module.exports = router;