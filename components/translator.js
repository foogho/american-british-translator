const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');
const britishToAmericanSpelling = require('./british-to-american-spelling.js');
const britishToAmericanTitles = require('./british-to-american-titles.js');
class Translator {
  translate(text, targetAccent) {
    const translation = {
      text: text,
      highlights: [],
    };
    // get rid of the period at the end of the sentence
    if (text.match(/\.$/)) text = text.slice(0, text.length - 1);
    const words = text.split(' ').map((word) => word.toLowerCase());
    for (let i = 0; i < words.length; i++) {
      const combination = [];
      const nominations = [];
      for (let j = i; j < words.length; j++) {
        combination.push(words[j]);
        const text = combination.join(' ');
        let result =
          targetAccent === 'british'
            ? this.translateToBritish(text)
            : this.translateToAmerican(text);
        if (result !== text) {
          nominations.push({ text, result });
          i = j;
        }
      }
      if (nominations.length > 0) {
        const { result, text } = nominations[nominations.length - 1];
        translation.highlights.push(result);
        translation.text = translation.text.replace(
          new RegExp(text, 'i'),
          result
        );
      }
    }

    return translation;
  }

  translateToBritish(word) {
    return (
      americanToBritishTitles[word] ||
      americanOnly[word] ||
      americanToBritishSpelling[word] ||
      this.translateTimeToBritish(word) ||
      word
    );
  }
  translateToAmerican(word) {
    return (
      britishToAmericanTitles[word] ||
      britishOnly[word] ||
      britishToAmericanSpelling[word] ||
      this.translateTimeToAmerican(word) ||
      word
    );
  }

  translateTimeToBritish(time) {
    if (time.match(/^\d+(:|.)\d+$/)) return time.split(':').join('.');
  }
  translateTimeToAmerican(time) {
    if (time.match(/^\d+(:|.)\d+$/)) return time.split('.').join(':');
  }
}

module.exports = Translator;
