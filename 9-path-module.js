
const path = require('path');

console.log('path.sep: ',path.sep);

const filePath = path.join('/content','subfolder','test.txt')
console.log('filePath: ',filePath);

const base = path.basename(filePath);
console.log('base: ',base);

const absolitePath = path.resolve(__dirname,'content','subfolder','test.txt');
console.log('absolutePath: ',absolitePath);