const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const app = express();
const User = require("./model/user")
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Initial Request!!")
});

app.get('/questions', (req, res) => {
    res.send({ questions: "This is first question" })
})

app.post('/create-user', async(req, res) => {
    try {
        const myuser = new User(req.body);
        await myuser.save();
        res.send(myuser);
        // const name = req.body.name;
        // res.send(`User ${name} is created`);
    } catch (error) {
        res.send({ message: `Error occured! ${error}` })
    }
})

mongoose.connect(process.env.DB_CONNECTION_STRING, (req, res) => {
    console.log("Connected to the database");
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening to ${process.env.PORT || 5000}`);
})