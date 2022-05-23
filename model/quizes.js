const mongoose = require("mongoose")
const quizesSchema = new mongoose.Schema({
    title: String,
    questions: [
        {
            optionType: {type: String, enum:["mcqs", "objective"]},
            question: String,
            option: [String],
            answers: [Number]
        }
    ]
});

module.exports = mongoose.model("quizes", quizesSchema);