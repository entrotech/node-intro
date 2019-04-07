const axios = require("axios");
const fs = require("fs");

axios
  .get("https://hn.algolia.com/api/v1/search?query=nodejs")
  .then(response => {
    console.log(response.data);
    fs.writeFile("data/hackerNews.json", JSON.stringify(response.data, null, 2), err => {
      if (err) {
        throw err;
      }
    });
  })
  .catch(err => {
    throw err;
  });
