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
  rl.question(chalk.bgMagenta("Please provide your name below:\n"), (reply) => {
    name = reply.trim();
    rl.setPrompt(chalk.blue(`Would you like a quote today? ${name}\n`));
    rl.prompt();
    rl.on("line", (reply) => {
      if (reply.trim() === "yes") {
        console.log(`Your requested quote:`);
        console.log(
          chalk.bgGreen(
            `${quotes[Math.floor(Math.random() * quotes.length)]}\n`
          )
        );
        rl.setPrompt("Would you like another quote today?\n\n");
        rl.prompt();
      } else {
        rl.close();
      }
    });
  });
};

doYouWantAnotherQuote();
