let arr;

process.stdin.once('data', (chunk) => {
    arr = new Uint8Array(chunk);
});

process.stdin.on('end', () => {
    console.log(JSON.stringify(arr));
});
