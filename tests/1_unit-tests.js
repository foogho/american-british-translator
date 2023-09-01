const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translator = new Translator();

suite('Unit Tests', () => {
  test('Translate Mangoes are my favorite fruit. to British English', () => {
    const translation = translator.translate(
      'Mangoes are my favorite fruit.',
      'british'
    );
    assert.equal(translation.text, 'Mangoes are my favourite fruit.');
  });
  test('Translate I ate yogurt for breakfast. to British English', () => {
    const translation = translator.translate(
      'I ate yogurt for breakfast.',
      'british'
    );
    assert.equal(translation.text, 'I ate yoghurt for breakfast.');
  });
  test("Translate We had a party at my friend's condo. to British English", () => {
    const translation = translator.translate(
      "We had a party at my friend's condo.",
      'british'
    );
    assert.equal(translation.text, "We had a party at my friend's flat.");
  });
  test('Translate Can you toss this in the trashcan for me? to British English', () => {
    const translation = translator.translate(
      'Can you toss this in the trashcan for me?',
      'british'
    );
    assert.equal(translation.text, 'Can you toss this in the bin for me?');
  });
  test('Translate The parking lot was full. to British English', () => {
    const translation = translator.translate(
      'The parking lot was full.',
      'british'
    );
    assert.equal(translation.text, 'The car park was full.');
  });
  test('Translate Like a high tech Rube Goldberg machine. to British English', () => {
    const translation = translator.translate(
      'Like a high tech Rube Goldberg machine.',
      'british'
    );
    assert.equal(translation.text, 'Like a high tech Heath Robinson device.');
  });
  test('Translate To play hooky means to skip class or work. to British English', () => {
    const translation = translator.translate(
      'To play hooky means to skip class or work.',
      'british'
    );
    assert.equal(translation.text, 'To bunk off means to skip class or work.');
  });
  test('Translate No Mr. Bond, I expect you to die. to British English', () => {
    const translation = translator.translate(
      'No Mr. Bond, I expect you to die.',
      'british'
    );
    assert.equal(translation.text, 'No Mr Bond, I expect you to die.');
  });
  test('Translate Dr. Grosh will see you now. to British English', () => {
    const translation = translator.translate(
      'Dr. Grosh will see you now.',
      'british'
    );
    assert.equal(translation.text, 'Dr Grosh will see you now.');
  });
  test('Translate Lunch is at 12:15 today. to British English', () => {
    const translation = translator.translate(
      'Lunch is at 12:15 today.',
      'british'
    );
    assert.equal(translation.text, 'Lunch is at 12.15 today.');
  });
  test('Translate We watched the footie match for a while. to American English', () => {
    const translation = translator.translate(
      'We watched the footie match for a while.',
      'american'
    );
    assert.equal(translation.text, 'We watched the soccer match for a while.');
  });
  test('Translate Paracetamol takes up to an hour to work. to American English', () => {
    const translation = translator.translate(
      'Paracetamol takes up to an hour to work.',
      'american'
    );
    assert.equal(translation.text, 'Tylenol takes up to an hour to work.');
  });
  test('Translate First, caramelise the onions. to American English', () => {
    const translation = translator.translate(
      'First, caramelise the onions.',
      'american'
    );
    assert.equal(translation.text, 'First, caramelize the onions.');
  });
  test('Translate I spent the bank holiday at the funfair. to American English', () => {
    const translation = translator.translate(
      'I spent the bank holiday at the funfair.',
      'american'
    );
    assert.equal(
      translation.text,
      'I spent the public holiday at the carnival.'
    );
  });
  test('Translate I had a bicky then went to the chippy. to American English', () => {
    const translation = translator.translate(
      'I had a bicky then went to the chippy.',
      'american'
    );
    assert.equal(
      translation.text,
      'I had a cookie then went to the fish-and-chip shop.'
    );
  });
  test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
    const translation = translator.translate(
      "I've just got bits and bobs in my bum bag.",
      'american'
    );
    assert.equal(
      translation.text,
      "I've just got odds and ends in my fanny pack."
    );
  });
  test('Translate The car boot sale at Boxted Airfield was called off. to American English', () => {
    const translation = translator.translate(
      'The car boot sale at Boxted Airfield was called off.',
      'american'
    );
    assert.equal(
      translation.text,
      'The swap meet at Boxted Airfield was called off.'
    );
  });
  test('Translate Have you met Mrs Kalyani? to American English', () => {
    const translation = translator.translate(
      'Have you met Mrs Kalyani?',
      'american'
    );
    assert.equal(translation.text, 'Have you met Mrs. Kalyani?');
  });
  test("Translate Prof Joyner of King's College, London. to American English", () => {
    const translation = translator.translate(
      "Prof Joyner of King's College, London.",
      'american'
    );
    assert.equal(translation.text, "Prof. Joyner of King's College, London.");
  });
  test('Translate Tea time is usually around 4 or 4.30. to American English', () => {
    const translation = translator.translate(
      'Tea time is usually around 4 or 4.30.',
      'american'
    );
    assert.equal(translation.text, 'Tea time is usually around 4 or 4:30.');
  });
  test('Highlight translation in Mangoes are my favorite fruit.', () => {
    const translation = translator.translate(
      'Mangoes are my favorite fruit.',
      'british'
    );
    assert.equal(translation.highlights.length, 1);
    assert.equal(translation.highlights[0], 'favourite');
  });
  test('Highlight translation in I ate yogurt for breakfast.', () => {
    const translation = translator.translate(
      'I ate yogurt for breakfast.',
      'british'
    );
    assert.equal(translation.highlights.length, 1);
    assert.equal(translation.highlights[0], 'yoghurt');
  });
  test('Highlight translation in We watched the footie match for a while.', () => {
    const translation = translator.translate(
      'We watched the footie match for a while.',
      'american'
    );
    assert.equal(translation.highlights.length, 1);
    assert.equal(translation.highlights[0], 'soccer');
  });
  test('Highlight translation in Paracetamol takes up to an hour to work.', () => {
    const translation = translator.translate(
      'Paracetamol takes up to an hour to work.'
    );
    assert.equal(translation.highlights.length, 1);
    assert.equal(translation.highlights[0], 'Tylenol');
  });
});
