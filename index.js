const express = require("express");

var dat = require("./mock.json");

const application = express();

application.get("/", (req,res) => {
    res.send("Welcome to Home page")
});

application.get("/users", (req,res) => {
    res.send(dat);
});

application.listen(2369,function(){
    console.log("listening on port 2369")
});

