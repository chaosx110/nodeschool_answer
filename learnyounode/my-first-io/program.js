const fs = require('fs');

const buf = fs.readFileSync('path/to/file');

console.log(buf.toString());
