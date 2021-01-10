const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let name;

rl.question('What is your name fine person??\n', (reply)=>{
    name = reply.trim();
    rl.question(`${name}, are you looking for a quote today?\n`, (reply)=>{
        console.log(reply.trim());
        rl.close();
    });
})

rl.on('close', ()=>{
    console.log('Goodbye');
})