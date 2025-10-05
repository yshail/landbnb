const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const Review = require("./models/review.js");

//connecting mongodb
async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/Wanderlust");
  console.log("MongoDb Connected");
};
main().catch(err => console.log(err));

//middlewaress
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs" , ejsMate);

// //testing-database
// app.get("/testListing", async (req,res) => {
//   const sampleListing = new Listing({
//     title: "My new Villa",
//     description: "Near Beach",
//     price: 12000,
//     location: "goa",
//     country: "India"
//   });

//   await sampleListing.save();
//   res.send("Sucess testing");
// });

app.get("/", (req,res) => {
  res.send("Hi i am listening..")
});

//Index-Route
app.get("/listings",async (req,res) => {
  const alllistings = await Listing.find({});
  res.render("listings/index.ejs", {alllistings});
});

//new-route
app.get("/listings/new", (req,res) => {
  res.render("listings/new.ejs");
});

//Show-Route
app.get("/listings/:id", async (req,res) => {
  const {id} = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs",{listing});
});

//Create Route
app.post("/listings", async ( req, res) => {
  const addListing = new Listing(req.body.listing);
  await addListing.save();
  res.redirect("/listings");
});

//Edit-Route
app.get("/listings/:id/edit", async (req,res)=> {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", {listing});
});

//Update-Route
app.put("/listings/:id", async (req,res) => {
  const { id } = req.params;
  const { listing : newData } = req.body;
  await Listing.findByIdAndUpdate(id,newData);
  res.redirect(`/listings/${id}`);
});

//delete-Route
app.delete("/listings/:id", async ( req , res ) =>{
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
});

//Review
//Form-Submission Route
app.post("/listings/:id/reviews",async (req,res) => {
  let listing = await Listing.findById(req.params.id);
  let addReview = new Review(req.body.review);
  listing.reviews.push(addReview);

    await addReview.save();
    await listing.save();
    res.redirect("/listings");
});


app.listen(8080,(req,res) => {
  console.log("Server is listening")
});