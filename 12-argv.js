const fs = require("fs");

const filename = process.argv[2];
if (!filename) {
  throw Error("You must specify a file to watch as a command line argument - try data/target.txt");
}

fs.watch(filename, () => {
  console.log(`File ${filename} changed!`);
});
console.log(`Now watching file ${filename} for changes`);
