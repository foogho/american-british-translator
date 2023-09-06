'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  const translator = new Translator();

  app.route('/api/translate').post((req, res) => {
    try {
      let targetAccent;
      const locale = req.body.locale;
      const text = req.body.text;
      if (text === '') throw new Error('No text to translate');
      if (!text || !locale) throw new Error('Required field(s) missing');
      if (locale === 'american-to-british') targetAccent = 'british';
      else if (locale === 'british-to-american') targetAccent = 'american';
      else throw new Error('Invalid value for locale field');
      const translation = translator.translate(text, targetAccent);
      const result = translation.highlights.reduce((accumulator, word) => {
        return accumulator.replace(
          word,
          `<span class="highlight">${word}</span>`
        );
      }, translation.text);
      res.json({
        text,
        translation: result === text ? 'Everything looks good to me!' : result,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });
};
