"use strict";

const express = require("express");
const morgan = require("morgan");

const { users } = require("./data/users");
const { handleHomepage, handleFourOhFour } = require("./js/handler")

let currentUser = {};

// declare the 404 function


// -----------------------------------------------------
// server endpoints

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// endpoints

app.get('/', handleHomepage)
// a catchall endpoint that will send the 404 message.
app.get("*", handleFourOhFour);

app.listen(8000, () => console.log("Listening on port 8000"));
