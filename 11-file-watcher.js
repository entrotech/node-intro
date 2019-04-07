const fs = require("fs");

fs.watch("data/target.txt", () => {
  console.log("File changed!");
});
console.log("Now watching file for changes");
