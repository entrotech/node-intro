"use strict";
/*
    There are several libraries that implement HTTP servers, including the node built-in
    libraries "http" and "https", but we use express which adds these important 
    features:
    1. Routing based on URL paths
    2. Managing sessions via cookies
    3. Parsing incoming requests (such as form data or JSON)
    4. Rejecting malformed requests.


*/
const express = require("express"); // a function that creates a web server
const morgan = require("morgan"); // a loggin utility
const axios = require("axios");

// create an instance of an express web server
const app = express();

// The use method adds a middleware function to the
// request processing pipeline.
app.use(morgan("dev"));

// The get method accepts a first parameter consisting of
// a partial url path. if the request is a GET request with
// a matching path, then the second and subsequent parameters
// prescribe a series of middleware functions that should handle
// the request and subsequent middleware in the pipeline will
// not be reached.
app.get("/hello/:name", (req, res) => {
  res.status(200).json({ hello: req.params.name });
});

app.get("/hackernews/:q", (req, res) => {
  axios
    .get(`https://hn.algolia.com/api/v1/search?query=${req.params.q}`)
    .then(response => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(err => {
      res.status(503).json({ message: "Hacker News Service not responding" });
    });
});

app.listen(3004, () => console.log("Ready..."));
