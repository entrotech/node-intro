/*
    Demonstrates creating a child process, which
    can process commands.
    Each process has pre-defined streams called
    stdin (input), stdout (output) and stderr (error output).
    The "pipe" method allows you to redirect streams between processes.

    NOTE: It is normal to get two or more callbacks from a single change to a file.
    This is an inherent problem with the file watcher interaction with the 
    file system.
*/
const fs = require("fs");
const spawn = require("child_process").spawn;

const filename = process.argv[2];
if (!filename) {
  throw Error("You must specify a file to watch as a command line argument - try data/target.txt");
}

fs.watch(filename, () => {
  // spawn creates a child process, calling the "ls" as if from the
  // shell with arguments -l -h filename.
  const ls = spawn("ls", ["-l", "-h", filename]);
  // "pipe" the output of the child process to the output
  // of the current process
  ls.stdout.pipe(process.stdout);
});
console.log(`Now watching file ${filename} for changes`);
