const fs = require("fs");

const fileName = "topper.txt";

fs.watchFile(fileName, (curr, prev) => {
  console.log(`curr created Time: ${curr.birthtime}`);
  console.log(`prev created Time: ${prev.birthtime}`);
  console.log(`curr modify: ${curr.mtime}`);
  console.log(`prev modify: ${prev.mtime}`);
  console.log(`curr atime: ${curr.atime}`);
  console.log(`prev atime: ${prev.atime}`);
});
