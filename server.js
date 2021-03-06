"use strict";

const express = require("express");
const morgan = require("morgan");

const { users } = require("./data/users");
const { handleHomepage, handleFourOhFour, handleProfilePage, handleSignin, handleName, handleUnfriend } = require("./js/handler")

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
app.get('/users/:id', handleProfilePage)
app.get('/signin', handleSignin)
app.post('/getname', handleName)
app.get(`/unfriend/:id`, handleUnfriend)
// a catchall endpoint that will send the 404 message.
app.get("*", handleFourOhFour);

app.listen(8000, () => console.log("Listening on port 8000"));
