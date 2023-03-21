// const fs = require("fs");

// const fileName = "topper.txt";

// if (fs.existsSync(fileName)) {
//   console.log(`${fileName} is available`);
// } else {
//   console.log(`${fileName} is not available`);
// }

const fs = require("fs");

const fileName = "basic.js";

if (fs.existsSync(fileName)) {
  console.log(`${fileName} is available`);
} else {
  console.log(`${fileName} is not available`);
}
