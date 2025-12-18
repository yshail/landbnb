const Listing = require("../models/listing.js");
const Review = require("../models/review.js");


module.exports.submitReview = async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  if (!listing) return res.status(404).send("Listing not found");
  let addReview = new Review(req.body.review);
  listing.reviews.push(addReview._id);

  await addReview.save();
  await listing.save();
  res.redirect(`/listings/${listing._id}`);
}

module.exports.deleteReview = async (req, res) => {
  const { id, reviewId } = req.params;
  await Review.findByIdAndDelete(reviewId);
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  res.redirect(`/listings/${id}`);
}