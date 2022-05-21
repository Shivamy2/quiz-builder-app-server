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
});

app.get('/me', async(req, res) => {
    try {
        const id = req.headers.authorization;
        User.find({_id: id}, (err, data) => {
            if(err) res.status(440).json({message: "id is invalid"});
            else res.status(200).json(data)
        });
    } catch (error) {
        res.status(430).json({message: "Could not trigger api0"})
    }
});

app.post('/login', async(req, res) => {
    try {
        const {email, password} = req.body;
        User.find({email: email, password: password}, (err, data) => {
            if(err) res.status(400).json({message: "User Not Found"});
            else res.status(200).json(data);
        })
    } catch (error) {
        res.json({message: "Cannot trigger API"})
    }
})

mongoose.connect(process.env.DB_CONNECTION_STRING, (req, res) => {
    console.log("Connected to the database");
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening to ${process.env.PORT || 5000}`);
})