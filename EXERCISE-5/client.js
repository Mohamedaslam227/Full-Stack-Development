const net = require('net');
const readline = require('readline');

const PORT = 3008;
const HOST = 'localhost';

const client = new net.Socket();

const rl = readline.createInterface(
    {
    input: process.stdin,
    output: process.stdout,
});

client.connect(PORT, HOST, () => {
    console.log('Connected to server');
    rl.prompt();
});

client.on('data', (data) => {
    console.log(data.toString());
    rl.prompt();
});

client.on('close', () => {
    console.log('Connection closed');
});

rl.on('line', (line) => {
    client.write(line.trim());
    rl.prompt();
});

rl.on('close', () => {
    client.end();
});
