const fs = require("fs");

const fileName = "topper.txt";

const data = "Topper Skills Pune";

// asynchronous
// fs.writeFile(fileName, data, (err) => {
//   if (err) {
//     console.log("Not written: ", err);
//   } else {
//     console.log("Written to the file");
//   }
// });

// synchronous

// try {
//   fs.writeFileSync(fileName, data);
//   console.log("Written to the file");
// } catch (e) {
//   console.log("Could Not write: ", err);
// }

// Appending the content

// async

fs.appendFile(fileName, data, (err) => {
  if (err) console.log("could not written");
  else console.log("written");
});

// synchronous

// fs.appendFileSync(fileName, data);
// console.log("written");
