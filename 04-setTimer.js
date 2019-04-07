/*
  setTimer uses a callback function ONE TIME, then
  the process has no callback to listen for, and
  node ends the process.

  Notice that the node app keeps running until the timeout occurs.
  A node process will stay open as long as it is waiting for
  a callback to complete or an EventEmitter is still running 
  (which we look at later).
*/
setTimeout(() => {
  console.log(" world");
}, 1000);
console.log("Hello,");
