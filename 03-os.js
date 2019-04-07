// os is a built-in module in node that allows you to get access to
// operating system information.
// You do not need to npm install os, but do need to require it.

const os = require("os");
console.log("03-os");
console.log(os);

console.log("Home Directory: " + os.homedir);
console.log("HostName: " + os.hostname);
console.log("UserInfo: " + JSON.stringify(os.userInfo()));
// for (property in os) {
//   console.log(property + ": " + typeof os[property]);
//   if (typeof os[property] === "function") {
//     console.log(property + ": " + os[property]());
//   } else if (typeof os[property] === "object") {
//     console.log(property + ": " + JSON.stringify(os[property]));
//   } else {
//     console.log(property + ": " + os[property]);
//   }
// }

// console.log(os.userInfo().getUserInfo());
