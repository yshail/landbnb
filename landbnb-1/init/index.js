const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/Wanderlust");
}

main().then( () =>
  console.log("Connectes with db successfully")
).catch( () =>
  console.log("Error connecting with db")
);

async function initDB(){
  await Listing.deleteMany();
  await Listing.insertMany(initData.data);
  console.log("Data initialized");
}

initDB();