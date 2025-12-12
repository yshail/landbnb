const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");

//Listing-Routes-------------------
//Index-Route
router.get("/", wrapAsync(async (req, res) => {
  const alllistings = await Listing.find({});
  res.render("listings/index.ejs", { alllistings });
}));

//new-route
router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

//Show-Route
router.get("/:id", wrapAsync(async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id).populate("reviews");
  // const review = await Review.findById(listing.reviews);
  res.render("listings/show.ejs", { listing });
}));

//Create Route
router.post("/",wrapAsync( async (req, res) => {
  const addListing = new Listing(req.body.listing);
  await addListing.save();
  req.flash("success", "New Successful");
  req.flash("success","New Entry Created Successfully!!");
  res.redirect("/listings");
}));

//Edit-Route
router.get("/:id/edit", wrapAsync(async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });

}));

//Update-Route
router.put("/:id", wrapAsync(async (req, res) => {
  const { id } = req.params;
  const { listing: newData } = req.body;
  await Listing.findByIdAndUpdate(id, newData);
  req.flash("success","Edited Successfully!!");
  res.redirect(`/listings/${id}`);
}));

//delete-Route
router.delete("/:id", wrapAsync(async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success","Deleted Successfully!!");
  res.redirect("/listings");
}));





//Export
module.exports = router;