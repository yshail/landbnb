const express = require('express');
const router = express.Router({mergeParams: true});
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");

//Review-----------------------------------------

//Form-Submission Route
router.post("/", wrapAsync(async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  if (!listing) return res.status(404).send("Listing not found");
  let addReview = new Review(req.body.review);
  listing.reviews.push(addReview._id);

  await addReview.save();
  await listing.save();
  res.redirect(`/listings/${listing._id}`);
}));

//delete-reviews
router.delete("/:reviewId", wrapAsync(async (req, res) => {
  const { id, reviewId } = req.params;
  await Review.findByIdAndDelete(reviewId);
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  res.redirect(`/listings/${id}`);
}));

module.exports = router;
