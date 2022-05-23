const mongoose = require("mongoose");

// const objectId = mongoose.Schema.ObjectId;

const UserSchema = new mongoose.Schema({
    // id: objectId,
    first_name: { type: String },
    last_name: { type: String },
    age: { type: Number },
    email: { type: String },
    password: { type: String },
    quizes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "quizes"
        }
    ]
});

module.exports = mongoose.model("users", UserSchema);