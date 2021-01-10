const readline = require('readline');
const chalk = require('chalk');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let name;
const quotes = ['Wow, no way!!!', 'For sure man', 'You\'ve got to be kidding me???', 'Just do it!!!'];

rl.question(chalk.bold.red.inverse('What is your name fine person??\n'), (reply)=>{
    name = reply.trim();
    rl.question(chalk.inverse.green(`${name}, are you looking for a quote today?\n`), (reply)=>{
        console.log(reply.trim());
        if(reply.trim() === 'yes'){

        }
        rl.close();
    });
})

rl.on('close', ()=>{
    console.log(chalk.inverse.blue('Goodbye, come again!!!'));
})