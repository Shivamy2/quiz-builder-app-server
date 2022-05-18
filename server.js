const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config")

const app = express();
const User = require("./model/user")
app.use(express.json());

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
        res.send({ message: "Error occured!" })
    }
})

mongoose.connect(process.env.DB_CONNECTION_STRING, (req, res) => {
    console.log("Connected to the database");
})

app.listen(3333, () => {
    console.log(`Listening to ${3333}`);
})