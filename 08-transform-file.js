const fs = require("fs");
const os = require("os");

fs.readFile("data/data.json", (err, data) => {
  if (err) {
    throw err;
  }
  const toys = JSON.parse(data.toString());
  const toyList = toys.map(toy => `${toy.name} (${toy.id})`);
  console.log(toyList);

  const output = toyList.join(os.EOL);
  fs.writeFile("data/output.txt", output, err => {
    if (err) {
      throw err;
    }
    console.log("File saved");
  });
});
