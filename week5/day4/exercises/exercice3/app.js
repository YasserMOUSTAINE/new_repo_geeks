const { readFile, writeFile } = require("./fileManager");

readFile("Hello World.txt", (err, data) => {
  if (err) return console.error("Read error:", err);
  console.log("File content:", data);

  writeFile("Bye World.txt", "Writing to the file", (err) => {
    if (err) return console.error("Write error:", err);
    console.log("Successfully wrote to Bye World.txt");
  });
});
