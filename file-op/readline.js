// If you want to take input from command

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("what is city?", (city) => {
  console.log("Your city is " + city);
  rl.close();
});

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("what is your city?", (city) => {
//   console.log("your city is " + city);
//   rl.close();
// });
