const mongoose = require("mongoose");

const objectId = mongoose.Schema.ObjectId;

const UserSchema = new mongoose.Schema({
    id: objectId,
    first_name: String,
    last_name: String,
    age: Number,
    gender: String,
    email: String,
    password: String
});

module.exports = mongoose.model("users", UserSchema);