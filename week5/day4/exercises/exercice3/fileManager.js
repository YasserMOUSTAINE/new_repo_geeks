const fs = require("fs");

function readFile(filename, callback) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) return callback(err);
    callback(null, data);
  });
}

function writeFile(filename, content, callback) {
  fs.writeFile(filename, content, (err) => {
    if (err) return callback(err);
    callback(null);
  });
}

module.exports = { readFile, writeFile };
