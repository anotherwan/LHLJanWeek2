// Given Node's File System documentation, write a command line program that reads a file and prints its contents to standard output.
//
// This program should receive a command line argument using process.argv, and read the specified file asynchronously.
//
// It's good practice to output files to the /tmp directory in order to avoid overwriting important files elsewhere.


var args = process.argv.slice(2);
var fs = require("fs");

fs.readFile(args[0], function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});
