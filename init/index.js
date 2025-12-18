require("dotenv").config();
const mongoose = require("mongoose");
const { sampleListings } = require("./data.js");
const Listing = require("../models/listing.js");
const dbUrl = process.env.ATLASDB_URL;

async function main() {
  await mongoose.connect("mongodb+srv://shail-mongo:1a11qsis@cluster0.tpjzlaf.mongodb.net/?appName=Cluster0");
}

main().then(() =>
  console.log("Connectes with db successfully")
).catch((e) =>
  console.log(e.message)
);

async function initDB() {
  await Listing.insertMany(sampleListings);
  console.log("Data initialized");
  mongoose.connection.close();
}

initDB();