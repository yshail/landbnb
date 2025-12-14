const mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");
if (passportLocalMongoose && passportLocalMongoose.default) passportLocalMongoose = passportLocalMongoose.default;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);


