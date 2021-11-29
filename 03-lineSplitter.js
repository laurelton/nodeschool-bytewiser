const fs = require('fs');

fs.readFile(process.argv[2], (err, data) => {
    if (err) {
        throw err;
    }

    const lines = data.toString().split('\n');

    for (const line of lines) {
        console.log(Buffer.from(line));
    }
});
