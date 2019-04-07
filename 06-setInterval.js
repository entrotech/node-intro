/*
  Expands on 05-setInterval by showing how to 
  clearInterval. Uncomment the max < 5 case to
  see that throwing an error also causes the
  process to terminate.
*/

// This is not a global variable, since node
// packages each file as a module (i.e., inside
// a function scope)
let max = 10;

const intervalId = setInterval(() => {
  if (max == 0) {
    clearInterval(intervalId);
    console.log("Blast Off!");
    // } else if (max < 5) {
    //   throw new Error("Abort!");
  } else {
    console.log(max);
    max--;
  }
}, 1000);
console.log("Starting ...");
