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
  rl.question("What is your name, oh fine customer??\n", (reply) => {
    name = reply.trim();
    rl.setPrompt(`Would you like a quote today? ${name}\n`);
    rl.prompt();
    rl.on("line", (reply) => {
      if (reply.trim() === "yes") {
        console.log(quotes[Math.floor(Math.random() * quotes.length)]);
        rl.setPrompt("Would you like another quote today?\n\n");
        rl.prompt();
      } else {
        rl.close();
      }
    });
  });
};

doYouWantAnotherQuote();
