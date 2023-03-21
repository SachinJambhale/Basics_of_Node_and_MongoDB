// const fs = require("fs");

// const fileName = "topper.txt";
// async
// fs.unlink(fileName, () => {
//   console.log("removed....");
// });

// sync

try {
  fs.unlinkSync(fileName);
  console.log("removed...");
} catch (err) {
  console.log(err);
}

// a = "aa";
// b = "bb";
// console.log(a);
// // console.log(b);
// // console.log(c);

// var a;
// let b;
// const c = "cc";
