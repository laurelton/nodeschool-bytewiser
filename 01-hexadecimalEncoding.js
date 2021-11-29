const args = process.argv.slice(2);

const buf = Buffer.from(args);
console.log(buf.toString('hex'));
