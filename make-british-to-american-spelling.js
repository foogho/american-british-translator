const fs = require('fs');
const path = require('path');

const americanToBritishSpelling = require('./components/american-to-british-spelling');

let britishToAmericanSpellingFileContent = 'module.exports={\n';

for (let key in americanToBritishSpelling) {
  const britishSpelling = americanToBritishSpelling[key];

  britishToAmericanSpellingFileContent += `${britishSpelling} : "${key}", \n`;
}

britishToAmericanSpellingFileContent += '}';

fs.writeFileSync(
  path.join(__dirname, 'components', 'british-to-american-spelling.js'),
  britishToAmericanSpellingFileContent
);
