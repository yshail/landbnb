const Listing = require("../models/listing.js");


module.exports.index = async (req, res) => {
    const alllistings = await Listing.find({});
    res.render("listings/index.ejs", { alllistings });
}

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs")
}

module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    // const review = await Review.findById(listing.reviews);
    if (!listing) {
        req.flash("error", "Entry Does not exist!");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}

module.exports.createListing = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.image = { url, filename };

    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");

}

module.exports.editListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });

}

module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    const { listing: newData } = req.body;
    if (req.file) {
        newData.image = {};
        newData.image.url = req.file.path;
        newData.image.filename = req.file.filename;
    }
    await Listing.findByIdAndUpdate(id, newData);
    req.flash("success", "Edited Successfully!!");
    res.redirect(`/listings/${id}`);
}

module.exports.deleteListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Deleted Successfully!!");
    res.redirect("/listings");
}