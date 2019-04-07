const fs = require("fs");

fs.readFile("data/data.json", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});
