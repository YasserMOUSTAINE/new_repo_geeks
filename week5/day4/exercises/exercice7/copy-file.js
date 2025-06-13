const fs = require("fs");

fs.readFile("source.txt", "utf8", (err, data) => {
  if (err) return console.error("Read error:", err);
  fs.writeFile("destination.txt", data, (err) => {
    if (err) return console.error("Write error:", err);
    console.log("File copied successfully!");
  });
});
