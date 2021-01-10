const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let name;
const quotes = [
  "Wow, no way!!!",
  "For sure man",
  "You've got to be kidding me???",
  "Just do it!!!",
];

let doYouWantAnotherQuote = () => {
  rl.question("What is you name fine customer??", (reply) => {
    console.log(reply);
    rl.setPrompt("This is a test\n");
    rl.prompt();
    rl.on("line", (reply) => {});
  });
};

doYouWantAnotherQuote();
