const express = require('express');
const router = express.Router({mergeParams: true});
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { submitReview, deleteReview } = require('../controllers/reviews.js');

//Review-----------------------------------------

//Form-Submission Route
router.post("/:id/reviews", wrapAsync(submitReview));

//delete-reviews
router.delete("/:id/reviews/:reviewId", wrapAsync(deleteReview));

module.exports = router;
