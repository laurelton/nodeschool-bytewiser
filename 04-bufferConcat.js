const buffers = [];

process.stdin.on('data', (chunk) => {
    buffers.push(chunk);
});

process.stdin.on('end', () => {
    console.log(Buffer.concat(buffers));
});
