const readline = require('readline');
const chalk = require('chalk');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let name;

rl.question(chalk.bold.red.inverse('What is your name fine person??\n'), (reply)=>{
    name = reply.trim();
    rl.question(chalk.inverse.green(`${name}, are you looking for a quote today?\n`), (reply)=>{
        console.log(reply.trim());
        rl.close();
    });
})

rl.on('close', ()=>{
    console.log(chalk.inverse.blue('Goodbye, come again!!!'));
})