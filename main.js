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
  rl.question("What is you name fine customer??\n", (reply) => {
    rl.setPrompt("Would you like a quote today?\n");
    rl.prompt();
    rl.on("line", (reply) => {
      if (reply.trim() === "yes") {
        console.log(quotes[Math.floor(Math.random() * quotes.length)]);
        rl.prompt();
      } else {
        rl.close();
      }
    });
  });
};

doYouWantAnotherQuote();
