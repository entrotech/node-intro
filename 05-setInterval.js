/*
  setInterval sets up a callback, but on completion of
  the callback, sets up another callback, so the 
  process will run indefinitely as long as no errors
  are thrown, and the interval is not cleared by calling
  clearInterval().

  Note that this locks up the console you are running, until
  you close the console window or type Ctrl-C in the console.
*/
setInterval(() => {
  console.log(" world");
}, 1000);
console.log("Hello,");
