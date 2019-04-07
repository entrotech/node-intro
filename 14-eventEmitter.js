/*
    EventEmitter.
    I/O streams are examples of EventEmitters.
    This shows how we can get hold of data from a child
    process' stdout stream using event listeners.
*/
const fs = require("fs");
const spawn = require("child_process").spawn;

const filename = process.argv[2];
if (!filename) {
  throw Error("You must specify a file to watch as a command line argument - try data/target.txt");
}

fs.watch(filename, () => {
  const ls = spawn("ls", ["-l", "-h", filename]);
  let output = "";

  ls.stdout.on("data", chunk => {
    output += chunk;
  });
  ls.stdout.on("close", () => {
    const parts = output.split(/\s+/);
    console.log("Child process stdout close event fired.");
    console.log(parts[0], parts[4], parts[8]);
  });
  ls.on("close", () => {
    console.log("Child process close event fired.");
  });
});
console.log(`Now watching file ${filename} for changes`);
