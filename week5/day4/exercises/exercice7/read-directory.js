const fs = require("fs");

fs.readdir(".", (err, files) => {
  if (err) return console.error("Read dir error:", err);
  console.log("Files in directory:");
  files.forEach(file => console.log(file));
});
