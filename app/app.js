const express = require("express");
const app = express();
// Importing error
const { notFoundError, serverError } = require("./error");

// Using middleware
app.use(require("./middleware"));
// using router
app.use(require("../routes/index"));

// using error middleware
app.use(notFoundError, serverError);
module.exports = app;
