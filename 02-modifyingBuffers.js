let bufstr = Buffer.from('');

process.stdin.on('data', (chunk) => {
    const periodCharCode = '.'.charCodeAt(0);
    for (const [indx, code] of chunk.entries()) {
        if (code === periodCharCode) {
            chunk.write('!', indx);
        }
    }
    bufstr = Buffer.concat([bufstr, chunk]);
});

process.stdin.on('end', () => {
    console.log(bufstr);
});
