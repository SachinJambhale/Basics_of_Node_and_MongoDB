// const fs = require("fs");

// const path = "test";

// fs.stat(path, (err, stats) => {
//   if (stats.isDirectory()) {
//     console.log("Its a directory");

//     const files = fs.readdirSync(path);

//     for (const file of files) console.log(file);
//   } else {
//     console.log("Its a file");
//   }
// });

const fs = require("fs");

const path = "test";

fs.stat(path, (err, stats) => {
  if (stats.isDirectory(path)) {
    console.log("Its a diectory");
    const files = fs.readdirSync(path);
    for (const file of files) console.log(file);
  } else console.log("Its a file");
});
